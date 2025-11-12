# 🚀 Production Deployment Checklist

Use this checklist to ensure your early access system is properly configured for production.

## Pre-Deployment

### ☐ Google OAuth Configuration
- [ ] Created OAuth 2.0 Client in Google Cloud Console
- [ ] Added production redirect URI: `https://yourdomain.com/api/auth/callback/google`
- [ ] Configured OAuth consent screen
- [ ] Tested OAuth flow in development
- [ ] Copied Client ID and Client Secret

### ☐ Supabase Setup
- [ ] Created production Supabase project (or using same for dev/prod)
- [ ] Executed `database/schema.sql` in SQL Editor
- [ ] Verified `early_access_signups` table exists
- [ ] Created `early-access-apks` storage bucket (or custom name)
- [ ] Set bucket to **Private** (not public)
- [ ] Uploaded APK file to storage
- [ ] Verified file is accessible via Supabase Dashboard
- [ ] Copied Supabase URL and API keys (anon + service role)

### ☐ APK Preparation
- [ ] Final APK build completed
- [ ] APK tested on multiple devices
- [ ] Calculated SHA-256 checksum using `./scripts/calculate-checksum.sh`
- [ ] Documented APK version number
- [ ] Uploaded to Supabase Storage

### ☐ Security Keys Generated
- [ ] Generated `NEXTAUTH_SECRET` using `openssl rand -base64 32`
- [ ] Generated `JWT_DOWNLOAD_SECRET` using `openssl rand -base64 32`
- [ ] Keys are strong and unique (not reused from other projects)
- [ ] Keys stored securely (password manager, not in code)

### ☐ Environment Variables
- [ ] All variables from `.env.example` are filled in `.env.local`
- [ ] No placeholder values remain
- [ ] `NEXTAUTH_URL` points to production domain
- [ ] `APK_SHA256_CHECKSUM` matches uploaded APK
- [ ] `APK_FILE_PATH` matches file name in Supabase

## Deployment to Vercel

### ☐ Repository Setup
- [ ] Code pushed to GitHub (or GitLab/Bitbucket)
- [ ] `.env.local` is **NOT** committed (in `.gitignore`)
- [ ] `.env.example` is committed (for reference)
- [ ] All documentation files committed

### ☐ Vercel Project Creation
- [ ] Logged into [Vercel](https://vercel.com)
- [ ] Imported GitHub repository
- [ ] Framework preset: Next.js detected automatically
- [ ] Root directory: `./` (default)

### ☐ Environment Variables in Vercel
Add all variables from `.env.local` to Vercel:

**Go to: Project Settings → Environment Variables**

- [ ] `NEXTAUTH_URL` = `https://yourdomain.com`
- [ ] `NEXTAUTH_SECRET` = (your generated secret)
- [ ] `GOOGLE_CLIENT_ID` = (from Google Cloud Console)
- [ ] `GOOGLE_CLIENT_SECRET` = (from Google Cloud Console)
- [ ] `NEXT_PUBLIC_SUPABASE_URL` = (from Supabase)
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (from Supabase)
- [ ] `SUPABASE_SERVICE_ROLE_KEY` = (from Supabase)
- [ ] `APK_STORAGE_BUCKET` = `early-access-apks`
- [ ] `APK_FILE_PATH` = `dotwe-early-access.apk`
- [ ] `APK_SHA256_CHECKSUM` = (your calculated checksum)
- [ ] `JWT_DOWNLOAD_SECRET` = (your generated secret)
- [ ] `DOWNLOAD_TOKEN_EXPIRY` = `3600` (optional)

**Important:** Set environment variables for **Production** environment (and optionally Preview if testing)

### ☐ Domain Configuration
- [ ] Custom domain added in Vercel
- [ ] DNS configured (A/CNAME records)
- [ ] SSL certificate issued (automatic with Vercel)
- [ ] `https://` working properly

### ☐ First Deployment
- [ ] Click "Deploy" in Vercel
- [ ] Wait for build to complete (~2-5 minutes)
- [ ] Check deployment logs for errors
- [ ] No build errors present

## Post-Deployment Testing

### ☐ Basic Functionality
- [ ] Visit `https://yourdomain.com/early-access`
- [ ] Page loads without errors
- [ ] UI displays correctly
- [ ] No console errors in browser DevTools

### ☐ Authentication Flow
- [ ] Click "Sign in with Google"
- [ ] Google sign-in popup appears
- [ ] Successfully authenticate with test account
- [ ] Redirected back to early access page
- [ ] User email displays correctly

### ☐ Signup Flow
- [ ] After signing in, automatic signup occurs
- [ ] Success message displays
- [ ] No errors in browser console
- [ ] Verify email stored in Supabase:
  - Go to Supabase Dashboard → Table Editor
  - Check `early_access_signups` table
  - Confirm test user's email is present

### ☐ Download Flow
- [ ] "Download APK" button appears
- [ ] Click download button
- [ ] Download starts automatically
- [ ] APK file downloads successfully
- [ ] File size matches original APK
- [ ] Verify in Supabase:
  - Check `downloaded_at` is set
  - Check `download_count` incremented

### ☐ Token Validation
- [ ] Test with expired token (wait 1+ hour or modify expiry)
- [ ] Should show "Invalid or expired token" message
- [ ] Sign in again generates new token
- [ ] New token works correctly

### ☐ Checksum Display
- [ ] SHA-256 checksum displays on page
- [ ] Checksum matches the one you calculated
- [ ] Verify checksum manually:
  ```bash
  shasum -a 256 downloaded-file.apk
  ```

### ☐ Security Tests
- [ ] Try accessing `/api/early-access/download` without token → 400 error
- [ ] Try with invalid token → 401 error
- [ ] Try accessing API endpoints without auth → 401 error
- [ ] Check Supabase storage bucket is not publicly accessible

## Monitoring & Analytics

### ☐ Supabase Dashboard
- [ ] Bookmark Supabase Dashboard URL
- [ ] Save queries for common analytics:
  ```sql
  -- Total signups
  SELECT COUNT(*) FROM early_access_signups;
  
  -- Download conversion rate
  SELECT 
    COUNT(*) FILTER (WHERE downloaded_at IS NOT NULL) * 100.0 / COUNT(*)
  FROM early_access_signups;
  ```

### ☐ Vercel Analytics (Optional)
- [ ] Enable Vercel Analytics
- [ ] Set up error tracking
- [ ] Configure alerts for high error rates

### ☐ Error Monitoring
- [ ] Check Vercel deployment logs regularly
- [ ] Review Supabase logs: Project → Logs
- [ ] Set up email alerts for critical errors (optional)

## Documentation

### ☐ Team Documentation
- [ ] Share `EARLY_ACCESS_SETUP.md` with team
- [ ] Document any custom changes made
- [ ] Note APK version and release date
- [ ] Create runbook for common issues

### ☐ User Documentation
- [ ] Create FAQ page (optional)
- [ ] Prepare support responses for common questions
- [ ] Document minimum Android version requirements
- [ ] Prepare installation troubleshooting guide

## Marketing & Outreach

### ☐ Announce Early Access
- [ ] Blog post / announcement
- [ ] Social media posts
- [ ] Email to existing users
- [ ] Add link to main website

### ☐ Landing Page Updates
- [ ] Add "Early Access" button to homepage
- [ ] Update navigation menu
- [ ] Add banner/CTA for early access
- [ ] Update meta descriptions for SEO

## Maintenance

### ☐ Regular Checks
- [ ] Monitor signup rate (weekly)
- [ ] Monitor download rate (weekly)
- [ ] Check for errors in logs (weekly)
- [ ] Review user feedback (ongoing)

### ☐ Updates & Iterations
- [ ] Plan for APK version updates
- [ ] Create process for updating APK:
  1. Build new APK
  2. Calculate new checksum
  3. Upload to Supabase Storage
  4. Update `APK_SHA256_CHECKSUM` in Vercel
  5. Update `APK_FILE_PATH` if filename changed
  6. Redeploy (or auto-deploy if using CD)

### ☐ Data Management
- [ ] Set up regular database backups (Supabase handles this)
- [ ] Plan for exporting email list if needed
- [ ] Document data retention policy
- [ ] Ensure GDPR/privacy compliance

## Emergency Contacts

Document key contacts and credentials:

- **Vercel Account**: ________________
- **Supabase Account**: ________________
- **Google Cloud Console**: ________________
- **Domain Registrar**: ________________
- **Password Manager**: ________________

## Rollback Plan

If something goes wrong:

1. **Revert Deployment**
   - Go to Vercel Deployments
   - Find last working deployment
   - Click "Promote to Production"

2. **Disable Early Access**
   - Change page to show "Maintenance Mode"
   - Or redirect to main site temporarily

3. **Emergency Contacts**
   - Have team member emails ready
   - Document on-call rotation

## Success Metrics

Track these KPIs:

- [ ] Total signups
- [ ] Conversion rate (signups → downloads)
- [ ] Download completion rate
- [ ] Average time to download
- [ ] User feedback/satisfaction
- [ ] Error rate
- [ ] Bounce rate on early access page

## Final Checks

- [ ] All items above completed ✅
- [ ] Production URL works: `https://yourdomain.com/early-access`
- [ ] Test user successfully downloaded APK
- [ ] Documentation saved and shared
- [ ] Team notified of go-live
- [ ] Monitoring in place

---

## 🎉 Ready to Launch!

Once all checkboxes are complete, your early access system is production-ready!

**Launch Date**: _______________
**Deployed By**: _______________
**Version**: _______________

---

**Need Help?**
- Review `EARLY_ACCESS_SETUP.md`
- Check `EARLY_ACCESS_API.md`
- Review Vercel docs: https://vercel.com/docs
- Review Supabase docs: https://supabase.com/docs
