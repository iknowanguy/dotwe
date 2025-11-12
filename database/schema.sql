-- Early Access Signups Table
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS early_access_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  google_id VARCHAR(255) NOT NULL UNIQUE,
  signed_up_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  downloaded_at TIMESTAMP WITH TIME ZONE,
  download_count INTEGER DEFAULT 0,
  last_download_at TIMESTAMP WITH TIME ZONE,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_early_access_email ON early_access_signups(email);
CREATE INDEX IF NOT EXISTS idx_early_access_google_id ON early_access_signups(google_id);
CREATE INDEX IF NOT EXISTS idx_early_access_signed_up_at ON early_access_signups(signed_up_at);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_early_access_signups_updated_at
  BEFORE UPDATE ON early_access_signups
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE early_access_signups ENABLE ROW LEVEL SECURITY;

-- Policy: Allow service role full access
CREATE POLICY "Service role has full access" ON early_access_signups
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Policy: Users can only read their own data (optional, for future features)
CREATE POLICY "Users can read own data" ON early_access_signups
  FOR SELECT
  TO authenticated
  USING (email = auth.jwt() ->> 'email');
