# Early Access API Reference

## Endpoints

### 1. Sign Up for Early Access

**Endpoint:** `POST /api/early-access/signup`

**Authentication:** Requires NextAuth session (user must be signed in with Google)

**Request Body:** None (uses session data)

**Success Response (200):**
```json
{
  "success": true,
  "message": "Successfully registered for early access!",
  "downloadToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "email": "user@example.com"
}
```

**Error Responses:**
- `401` - Unauthorized (not signed in)
- `400` - Invalid email format
- `500` - Server error

---

### 2. Download APK

**Endpoint:** `GET /api/early-access/download?token={downloadToken}`

**Authentication:** Requires valid JWT download token from signup

**Query Parameters:**
- `token` (required): JWT download token from signup response

**Success Response (200):**
```json
{
  "success": true,
  "downloadUrl": "https://supabase.co/storage/v1/object/sign/...",
  "fileName": "dotwe-early-access.apk",
  "sha256Checksum": "abc123...",
  "expiresIn": 3600,
  "message": "Download link generated successfully"
}
```

**Error Responses:**
- `400` - Missing token parameter
- `401` - Invalid or expired token
- `404` - User not found in database
- `500` - Server error

**Notes:**
- Download URL expires in 1 hour (3600 seconds)
- Download event is logged in database
- Token can be used multiple times within expiry window

---

### 3. Google OAuth (NextAuth)

**Sign In:** `GET /api/auth/signin/google`

**Callback:** `GET /api/auth/callback/google`

**Sign Out:** `POST /api/auth/signout`

**Session:** `GET /api/auth/session`

**CSRF Token:** `GET /api/auth/csrf`

These are handled automatically by NextAuth. You typically use the client-side hooks:
```typescript
import { signIn, signOut, useSession } from "next-auth/react";

// Sign in
signIn("google");

// Sign out
signOut();

// Get session
const { data: session } = useSession();
```

---

## Client-Side Flow

### Complete Flow Example

```typescript
"use client";

import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

export default function EarlyAccessFlow() {
  const { data: session } = useSession();
  const [downloadToken, setDownloadToken] = useState<string | null>(null);

  // Step 1: Sign in with Google
  const handleSignIn = async () => {
    await signIn("google");
  };

  // Step 2: Register for early access (after sign-in)
  const handleSignup = async () => {
    const response = await fetch("/api/early-access/signup", {
      method: "POST",
    });
    const data = await response.json();
    setDownloadToken(data.downloadToken);
  };

  // Step 3: Download APK
  const handleDownload = async () => {
    const response = await fetch(
      `/api/early-access/download?token=${downloadToken}`
    );
    const data = await response.json();
    window.location.href = data.downloadUrl; // Trigger download
  };

  return (
    <div>
      {!session && (
        <button onClick={handleSignIn}>Sign in with Google</button>
      )}
      {session && !downloadToken && (
        <button onClick={handleSignup}>Join Early Access</button>
      )}
      {downloadToken && (
        <button onClick={handleDownload}>Download APK</button>
      )}
    </div>
  );
}
```

---

## Rate Limiting Recommendations

Consider adding rate limiting to prevent abuse:

```typescript
// Example using upstash/ratelimit
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 h"), // 5 requests per hour
});

export async function POST(request: NextRequest) {
  const ip = request.ip ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip);
  
  if (!success) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429 }
    );
  }
  
  // ... rest of your code
}
```

---

## Security Best Practices

1. **Never expose service role key** in client-side code
2. **Validate JWT tokens** on every download request
3. **Use HTTPS** in production
4. **Rotate secrets** periodically
5. **Monitor download patterns** for abuse
6. **Set up alerts** for unusual activity
7. **Keep dependencies updated**

---

## Testing

### Local Testing

1. Start dev server: `npm run dev`
2. Visit: `http://localhost:3000/early-access`
3. Sign in with Google (use test account)
4. Verify email stored in Supabase
5. Test download flow

### Production Testing

1. Deploy to Vercel
2. Update Google OAuth redirect URIs
3. Test with real domain
4. Verify all environment variables
5. Check Supabase logs

### Test Accounts

Create test Google accounts for QA:
- test1@yourdomain.com
- test2@yourdomain.com

### Monitoring Downloads

```sql
-- Check recent downloads
SELECT 
  email,
  download_count,
  last_download_at,
  signed_up_at
FROM early_access_signups
WHERE downloaded_at IS NOT NULL
ORDER BY last_download_at DESC
LIMIT 20;
```

---

## Common Issues & Solutions

### Issue: "Unauthorized" error
**Solution:** User needs to be signed in. Call `signIn("google")` first.

### Issue: Token expired
**Solution:** Tokens expire after 1 hour. User needs to sign in again.

### Issue: Download not starting
**Solution:** Check browser console for CORS errors. Verify signed URL is valid.

### Issue: Database connection failed
**Solution:** Verify Supabase credentials in `.env.local`

---

## Environment Variables Reference

| Variable                        | Required | Description                  |
| ------------------------------- | -------- | ---------------------------- |
| `NEXTAUTH_URL`                  | Yes      | Full URL of your app         |
| `NEXTAUTH_SECRET`               | Yes      | Secret for NextAuth          |
| `GOOGLE_CLIENT_ID`              | Yes      | Google OAuth client ID       |
| `GOOGLE_CLIENT_SECRET`          | Yes      | Google OAuth secret          |
| `NEXT_PUBLIC_SUPABASE_URL`      | Yes      | Supabase project URL         |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes      | Supabase anon key            |
| `SUPABASE_SERVICE_ROLE_KEY`     | Yes      | Supabase service key         |
| `APK_STORAGE_BUCKET`            | Yes      | Storage bucket name          |
| `APK_FILE_PATH`                 | Yes      | Path to APK in storage       |
| `APK_SHA256_CHECKSUM`           | Yes      | SHA-256 hash of APK          |
| `JWT_DOWNLOAD_SECRET`           | Yes      | Secret for JWT signing       |
| `DOWNLOAD_TOKEN_EXPIRY`         | No       | Token expiry (default: 3600) |

---

## Analytics Integration

Track downloads in your analytics:

```typescript
// Example with Google Analytics
const handleDownload = async () => {
  const data = await fetch(`/api/early-access/download?token=${token}`);
  
  // Track in GA4
  gtag('event', 'early_access_download', {
    event_category: 'engagement',
    event_label: session.user.email,
  });
  
  window.location.href = data.downloadUrl;
};
```

---

## Future Enhancements

- [ ] Email notifications on signup
- [ ] Download analytics dashboard
- [ ] Referral system
- [ ] Version management (multiple APK versions)
- [ ] Download count limits per user
- [ ] Expiring access links
- [ ] Waitlist functionality
- [ ] A/B testing different flows
