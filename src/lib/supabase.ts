import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _supabaseAdmin: SupabaseClient | null = null;
let _supabaseClient: SupabaseClient | null = null;

// Lazy initialization for server-side operations with service role key (full access)
export const getSupabaseAdmin = () => {
  if (!_supabaseAdmin) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error(
        "Missing Supabase environment variables. Please check NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
      );
    }

    _supabaseAdmin = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  }
  return _supabaseAdmin;
};

// Lazy initialization for client-side operations with anon key
export const getSupabaseClient = () => {
  if (!_supabaseClient) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error(
        "Missing Supabase environment variables. Please check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
      );
    }

    _supabaseClient = createClient(supabaseUrl, supabaseKey);
  }
  return _supabaseClient;
};

/**
 * Generate a signed URL for downloading the APK file
 * @param filePath Path to the file in storage
 * @param expiresIn Expiry time in seconds (default: 1 hour)
 * @returns Signed URL or null if error
 */
export async function generateSignedDownloadUrl(
  filePath: string,
  expiresIn: number = 3600
): Promise<string | null> {
  try {
    const supabaseAdmin = getSupabaseAdmin();
    const { data, error } = await supabaseAdmin.storage
      .from(process.env.APK_STORAGE_BUCKET!)
      .createSignedUrl(filePath, expiresIn);

    if (error) {
      console.error("Error generating signed URL:", error);
      return null;
    }

    return data.signedUrl;
  } catch (error) {
    console.error("Exception generating signed URL:", error);
    return null;
  }
}

/**
 * Check if APK file exists in storage
 * @param filePath Path to the file in storage
 * @returns true if exists, false otherwise
 */
export async function checkApkExists(filePath: string): Promise<boolean> {
  try {
    const supabaseAdmin = getSupabaseAdmin();
    const { data, error } = await supabaseAdmin.storage
      .from(process.env.APK_STORAGE_BUCKET!)
      .list("", {
        limit: 1,
        search: filePath,
      });

    if (error) {
      console.error("Error checking file existence:", error);
      return false;
    }

    return data && data.length > 0;
  } catch (error) {
    console.error("Exception checking file existence:", error);
    return false;
  }
}
