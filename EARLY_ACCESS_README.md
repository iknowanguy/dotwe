# 🚀 Early Access APK Download System

A secure, gated download system that requires Google OAuth authentication before allowing users to download your Android APK. Perfect for managing beta releases and collecting user emails.

## ✨ Features

- 🔐 **Secure Google OAuth** - Users authenticate with their Google account
- 📧 **Email Collection** - Automatically captures and stores user emails
- 🔑 **JWT Tokens** - Short-lived, secure download tokens
- ⏱️ **Time-Limited URLs** - Signed URLs that expire after 1 hour
- ✅ **SHA-256 Verification** - Checksum included for security verification
- 📊 **Download Tracking** - Track signups, downloads, and usage
- 🎨 **Beautiful UI** - Modern, responsive design with Tailwind CSS
- 🛡️ **Row Level Security** - Supabase RLS policies for data protection

## 🏗️ Architecture

```
User Flow:
1. Visit /early-access
2. Click "Sign in with Google"
3. Google OAuth verification
4. Server stores email in Supabase
5. Server generates JWT download token
6. User clicks "Download APK"
7. Server validates token
8. Server generates signed URL from Supabase Storage
9. APK download starts automatically
10. Download event logged in database
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS, shadcn/ui
- **Authentication**: NextAuth.js with Google OAuth
- **Backend**: Next.js API Routes (App Router)
- **Database**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage (S3-compatible)
- **JWT**: jose library
- **Security**: bcrypt, Row Level Security (RLS)

## 📁 Project Structure

```
dotwe/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts          # NextAuth configuration
│   │   └── early-access/
│   │       ├── signup/
│   │       │   └── route.ts          # Signup endpoint
│   │       └── download/
│   │           └── route.ts          # Download endpoint
│   ├── early-access/
│   │   └── page.tsx                  # Early Access UI
│   └── layout.tsx                    # Root layout with NextAuth provider
├── src/
│   ├── lib/
│   │   ├── auth.ts                   # NextAuth options
│   │   ├── jwt.ts                    # JWT utilities
│   │   ├── supabase.ts               # Supabase client & storage
│   │   └── database.ts               # Database operations
│   └── components/
│       └── ui/                       # shadcn/ui components
├── components/
│   └── NextAuthProvider.tsx          # Session provider wrapper
├── types/
│   └── next-auth.d.ts                # NextAuth type extensions
├── database/
│   └── schema.sql                    # Database schema
├── scripts/
│   └── calculate-checksum.sh         # SHA-256 calculator
├── .env.local                        # Environment variables (not in git)
├── .env.example                      # Environment template
├── EARLY_ACCESS_SETUP.md            # Setup guide
└── EARLY_ACCESS_API.md              # API documentation
```

## 🚀 Quick Start

### 1. Install Dependencies

Dependencies are already installed, but if needed:

```bash
npm install
```

### 2. Set Up Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create OAuth 2.0 credentials
3. Add redirect URI: `http://localhost:3000/api/auth/callback/google`
4. Copy Client ID and Secret

### 3. Set Up Supabase

1. Create a [Supabase](https://supabase.com/) project
2. Run the SQL from `database/schema.sql` in SQL Editor
3. Create a storage bucket called `early-access-apks`
4. Upload your APK file
5. Copy your API keys from Settings → API

### 4. Generate Secrets

```bash
# Generate NEXTAUTH_SECRET
openssl rand -base64 32

# Generate JWT_DOWNLOAD_SECRET
openssl rand -base64 32
```

### 5. Calculate APK Checksum

```bash
./scripts/calculate-checksum.sh path/to/your.apk
```

### 6. Configure Environment

Copy `.env.example` to `.env.local` and fill in all values:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual values.

### 7. Run Development Server

```bash
npm run dev
```

Visit: `http://localhost:3000/early-access`

## 📚 Documentation

- **[Setup Guide](./EARLY_ACCESS_SETUP.md)** - Complete setup instructions
- **[API Reference](./EARLY_ACCESS_API.md)** - Endpoint documentation

## 🔐 Security Features

- ✅ Server-side OAuth verification
- ✅ JWT with expiration (1 hour)
- ✅ Time-limited signed URLs
- ✅ Private storage bucket
- ✅ Row Level Security (RLS)
- ✅ Email validation
- ✅ SHA-256 checksum verification
- ✅ CSRF protection (NextAuth)

## 📊 Database Schema

```sql
early_access_signups
├── id (UUID)
├── email (VARCHAR, UNIQUE)
├── google_id (VARCHAR, UNIQUE)
├── signed_up_at (TIMESTAMP)
├── downloaded_at (TIMESTAMP)
├── download_count (INTEGER)
├── last_download_at (TIMESTAMP)
├── metadata (JSONB)
├── created_at (TIMESTAMP)
└── updated_at (TIMESTAMP)
```

## 🎯 API Endpoints

### POST `/api/early-access/signup`
Register user for early access and generate download token.

**Requires**: NextAuth session

**Returns**: 
```json
{
  "success": true,
  "downloadToken": "eyJhbGc...",
  "email": "user@example.com"
}
```

### GET `/api/early-access/download?token=...`
Generate signed download URL for APK.

**Requires**: Valid JWT token

**Returns**:
```json
{
  "success": true,
  "downloadUrl": "https://...",
  "sha256Checksum": "abc123...",
  "expiresIn": 3600
}
```

## 🎨 Customization

### Change UI Colors

The page uses Tailwind CSS. Modify colors in `app/early-access/page.tsx`:

```tsx
// Change from blue/purple gradient to your brand colors
className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50"
```

### Change Token Expiry

In `.env.local`:
```env
DOWNLOAD_TOKEN_EXPIRY=7200  # 2 hours
```

### Add More OAuth Providers

In `src/lib/auth.ts`:
```typescript
import GitHubProvider from "next-auth/providers/github";

providers: [
  GoogleProvider({ /* ... */ }),
  GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }),
]
```

## 📈 Monitoring

### View Signups in Supabase

1. Go to Supabase Dashboard
2. Navigate to Table Editor
3. Select `early_access_signups`

### Query Examples

```sql
-- Total signups
SELECT COUNT(*) FROM early_access_signups;

-- Download rate
SELECT 
  COUNT(*) FILTER (WHERE downloaded_at IS NOT NULL) * 100.0 / COUNT(*) as download_rate
FROM early_access_signups;

-- Recent activity
SELECT email, signed_up_at, download_count 
FROM early_access_signups 
ORDER BY signed_up_at DESC 
LIMIT 10;
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add all environment variables
4. Update `NEXTAUTH_URL` to production domain
5. Deploy!

### Update Google OAuth

Add production redirect URI:
```
https://yourdomain.com/api/auth/callback/google
```

## 🐛 Troubleshooting

### "Invalid or expired token"
→ Token expires after 1 hour. User needs to sign in again.

### "Failed to generate download link"
→ Check APK exists in Supabase Storage and bucket name is correct.

### Google OAuth errors
→ Verify redirect URIs match exactly (http/https).

### Database connection errors
→ Check Supabase credentials in `.env.local`.

## 🔄 Development Workflow

1. Make changes to code
2. Test locally at `http://localhost:3000/early-access`
3. Verify in Supabase Dashboard
4. Commit and push to GitHub
5. Auto-deploy via Vercel

## 📦 What's Included

- ✅ Complete authentication flow
- ✅ Secure download system
- ✅ Database schema & migrations
- ✅ Beautiful, responsive UI
- ✅ Error handling & validation
- ✅ TypeScript types
- ✅ Documentation & guides
- ✅ Helper scripts
- ✅ Environment templates

## 🎉 Success!

Your early access system is ready! Users can now:
1. Visit `/early-access`
2. Sign in with Google in one click
3. Automatically get registered
4. Download the APK securely
5. Verify with SHA-256 checksum

All emails are captured and tracked in your Supabase database! 🚀

## 📝 License

This project uses the same license as your main project.

## 🤝 Support

For questions or issues:
- Check the [Setup Guide](./EARLY_ACCESS_SETUP.md)
- Review [API Documentation](./EARLY_ACCESS_API.md)
- Check Supabase logs
- Review browser console

---

**Built with ❤️ using Next.js, NextAuth, and Supabase**
