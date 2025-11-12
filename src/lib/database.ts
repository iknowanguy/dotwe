import { getSupabaseAdmin } from "./supabase";

export interface EarlyAccessSignup {
  id: string;
  email: string;
  google_id: string;
  signed_up_at: string;
  downloaded_at: string | null;
  download_count: number;
  last_download_at: string | null;
  metadata: Record<string, any>;
  created_at: string;
  updated_at: string;
}

/**
 * Create or update an early access signup
 * @param email User's email
 * @param googleId User's Google ID
 * @returns Signup record or null
 */
export async function upsertEarlyAccessSignup(
  email: string,
  googleId: string
): Promise<EarlyAccessSignup | null> {
  try {
    const supabaseAdmin = getSupabaseAdmin();
    const { data, error } = await supabaseAdmin
      .from("early_access_signups")
      .upsert(
        {
          email,
          google_id: googleId,
        },
        {
          onConflict: "email",
          ignoreDuplicates: false,
        }
      )
      .select()
      .single();

    if (error) {
      console.error("Error upserting signup:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Exception upserting signup:", error);
    return null;
  }
}

/**
 * Get early access signup by email
 * @param email User's email
 * @returns Signup record or null
 */
export async function getEarlyAccessSignup(
  email: string
): Promise<EarlyAccessSignup | null> {
  try {
    const supabaseAdmin = getSupabaseAdmin();
    const { data, error } = await supabaseAdmin
      .from("early_access_signups")
      .select("*")
      .eq("email", email)
      .single();

    if (error) {
      console.error("Error fetching signup:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Exception fetching signup:", error);
    return null;
  }
}

/**
 * Record a download event
 * @param email User's email
 * @returns Updated signup record or null
 */
export async function recordDownload(
  email: string
): Promise<EarlyAccessSignup | null> {
  try {
    const supabaseAdmin = getSupabaseAdmin();
    // First get current download count
    const { data: currentData } = await supabaseAdmin
      .from("early_access_signups")
      .select("download_count")
      .eq("email", email)
      .single();

    const newCount = (currentData?.download_count || 0) + 1;

    const { data, error } = await supabaseAdmin
      .from("early_access_signups")
      .update({
        downloaded_at: new Date().toISOString(),
        last_download_at: new Date().toISOString(),
        download_count: newCount,
      })
      .eq("email", email)
      .select()
      .single();

    if (error) {
      console.error("Error recording download:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Exception recording download:", error);
    return null;
  }
}

/**
 * Get total signup count
 * @returns Number of signups
 */
export async function getSignupCount(): Promise<number> {
  try {
    const supabaseAdmin = getSupabaseAdmin();
    const { count, error } = await supabaseAdmin
      .from("early_access_signups")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("Error getting signup count:", error);
      return 0;
    }

    return count || 0;
  } catch (error) {
    console.error("Exception getting signup count:", error);
    return 0;
  }
}
