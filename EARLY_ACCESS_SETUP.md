# Early Access Setup Guide

This guide will help you set up the gated early access download system for your APK.

## 🎯 Overview

The system implements a secure, gated download flow:
1. User signs in with Google OAuth
2. Backend verifies and stores email in Supabase
3. Backend generates a short-lived JWT download token
4. User receives a time-limited signed URL to download the APK
5. Download is tracked with SHA-256 checksum verification

## 📋 Prerequisites

- Google Cloud Console account (for OAuth)
- Supabase account (for database and storage)
- Android APK file ready for upload

## 🔧 Setup Steps

### 1. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth 2.0 Client ID**
5. Configure OAuth consent screen if not done already
6. Choose **Web application** as application type
7. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)
8. Save and copy the **Client ID** and **Client Secret**

### 2. Supabase Database Setup

1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Create a new project or select an existing one
3. Navigate to **SQL Editor**
4. Copy the contents of `/database/schema.sql`
5. Paste and execute the SQL to create the `early_access_signups` table
6. Verify the table was created in **Table Editor**

### 3. Supabase Storage Setup

1. In Supabase Dashboard, go to **Storage**
2. Click **Create bucket**
3. Name it `early-access-apks` (or your preferred name)
4. Set it to **Private** (not public)
5. Click **Upload file** and upload your APK
6. Note the file path (e.g., `dotwe-early-access.apk`)

### 4. Generate APK SHA-256 Checksum

On your local machine with the APK file:

```bash
# macOS/Linux
shasum -a 256 your-app.apk

# Or use openssl
openssl dgst -sha256 your-app.apk

# Windows PowerShell
Get-FileHash your-app.apk -Algorithm SHA256
```

Copy the resulting hash string.

### 5. Generate Secret Keys

```bash
# Generate NEXTAUTH_SECRET
openssl rand -base64 32

# Generate JWT_DOWNLOAD_SECRET
openssl rand -base64 32
```

### 6. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in all the values in `.env.local`:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<generated-secret-from-step-5>

# Google OAuth
GOOGLE_CLIENT_ID=<from-google-cloud-console>
GOOGLE_CLIENT_SECRET=<from-google-cloud-console>

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<from-supabase-settings-api>
SUPABASE_SERVICE_ROLE_KEY=<from-supabase-settings-api>

# APK Configuration
APK_STORAGE_BUCKET=early-access-apks
APK_FILE_PATH=dotwe-early-access.apk
APK_SHA256_CHECKSUM=<from-step-4>

# JWT Configuration
JWT_DOWNLOAD_SECRET=<generated-secret-from-step-5>
DOWNLOAD_TOKEN_EXPIRY=3600
```

**Where to find Supabase keys:**
- Go to **Project Settings** → **API**
- Copy `URL` for `NEXT_PUBLIC_SUPABASE_URL`
- Copy `anon public` key for `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Copy `service_role` key for `SUPABASE_SERVICE_ROLE_KEY` (⚠️ Keep this secret!)

### 7. Install Dependencies & Run

Dependencies are already installed, but if needed:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Visit `http://localhost:3000/early-access` to test!

## 🚀 Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add all environment variables from `.env.local` to Vercel:
   - Go to **Settings** → **Environment Variables**
   - Add each variable (don't forget to update `NEXTAUTH_URL` to your production domain)
5. Deploy!

### Update Google OAuth for Production

1. Go back to Google Cloud Console
2. Add your production domain to authorized redirect URIs:
   - `https://yourdomain.com/api/auth/callback/google`

## 📊 Database Schema

The `early_access_signups` table tracks:

| Column             | Type         | Description              |
| ------------------ | ------------ | ------------------------ |
| `id`               | UUID         | Primary key              |
| `email`            | VARCHAR(255) | User's email (unique)    |
| `google_id`        | VARCHAR(255) | Google ID (unique)       |
| `signed_up_at`     | TIMESTAMP    | When user registered     |
| `downloaded_at`    | TIMESTAMP    | First download timestamp |
| `download_count`   | INTEGER      | Number of downloads      |
| `last_download_at` | TIMESTAMP    | Most recent download     |
| `metadata`         | JSONB        | Additional data          |

## 🔐 Security Features

✅ Server-side Google OAuth verification  
✅ JWT tokens with expiration (1 hour default)  
✅ One-time use tokens  
✅ Time-limited signed URLs (1 hour)  
✅ Row Level Security (RLS) on Supabase  
✅ Email validation and sanitization  
✅ SHA-256 checksum for APK verification  
✅ Private storage bucket (not publicly accessible)

## 🎨 Customization

### Change Token Expiry

In `.env.local`, modify:
```env
DOWNLOAD_TOKEN_EXPIRY=7200  # 2 hours in seconds
```

### Customize UI

The Early Access page is at `/app/early-access/page.tsx`. You can:
- Change colors/styling (uses Tailwind CSS)
- Modify text and descriptions
- Add more features or requirements
- Integrate with your existing design system

### Add More OAuth Providers

In `/src/lib/auth.ts`, add more providers:
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

### View Signups

In Supabase:
1. Go to **Table Editor**
2. Select `early_access_signups`
3. View all signups with emails and download stats

### Query Examples

```sql
-- Total signups
SELECT COUNT(*) FROM early_access_signups;

-- Users who downloaded
SELECT COUNT(*) FROM early_access_signups WHERE downloaded_at IS NOT NULL;

-- Recent signups (last 7 days)
SELECT * FROM early_access_signups 
WHERE signed_up_at > NOW() - INTERVAL '7 days'
ORDER BY signed_up_at DESC;

-- Top downloaders
SELECT email, download_count, last_download_at 
FROM early_access_signups 
ORDER BY download_count DESC 
LIMIT 10;
```

## 🐛 Troubleshooting

### "Invalid or expired token"
- Token expires after 1 hour by default
- User needs to sign in again to get a new token

### "Failed to generate download link"
- Check if APK file exists in Supabase Storage
- Verify `APK_STORAGE_BUCKET` and `APK_FILE_PATH` are correct
- Ensure `SUPABASE_SERVICE_ROLE_KEY` is set

### Google OAuth not working
- Verify redirect URIs match exactly (including http/https)
- Check Google Cloud Console for OAuth consent screen status
- Ensure `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` are correct

### Database errors
- Verify Supabase connection strings
- Check if SQL schema was executed successfully
- Ensure RLS policies are set up correctly

## 📞 Support

For issues or questions:
- Check Supabase logs: **Project** → **Logs**
- Check Vercel logs: **Deployments** → Select deployment → **Logs**
- Review browser console for frontend errors

## 🎉 You're All Set!

Your early access system is ready. Users can now:
1. Visit `/early-access`
2. Sign in with Google
3. Get instant access to download the APK
4. Verify using SHA-256 checksum

All emails are securely stored and tracked! 🚀
