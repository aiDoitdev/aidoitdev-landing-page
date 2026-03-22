/**
 * @fileoverview Supabase client initialization and configuration
 */

import { createClient } from "@supabase/supabase-js";
import { supabaseConfig } from "@/config";
import { createLogger } from "@/utils/logger";

const logger = createLogger("SupabaseClient");

/**
 * Validate Supabase configuration
 */
const validateSupabaseConfig = (): void => {
  if (!supabaseConfig.url) {
    logger.warn("NEXT_PUBLIC_SUPABASE_URL environment variable is not set");
  }

  if (!supabaseConfig.anonKey) {
    logger.warn("NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable is not set");
  }
};

/**
 * Initialize and export Supabase client
 * The client is created with the public anonymous key for client-side operations
 */
validateSupabaseConfig();

export const supabase = createClient(supabaseConfig.url || "", supabaseConfig.anonKey || "");

/**
 * Type for Supabase error responses
 */
export interface SupabaseError {
  code?: string;
  message: string;
  status?: number;
}

/**
 * Safe wrapper for Supabase operations with error handling
 * @example
 * const { data, error } = await safeSupabaseCall(() => 
 *   supabase.from('table').select()
 * );
 */
export async function safeSupabaseCall<T>(
  operation: () => Promise<{ data: T | null; error: SupabaseError | null }>
): Promise<{ data: T | null; error: SupabaseError | null }> {
  try {
    const result = await operation();
    return result;
  } catch (error) {
    logger.error("Supabase operation failed:", error);

    return {
      data: null,
      error: {
        message: error instanceof Error ? error.message : "Unknown error occurred",
      },
    };
  }
}

export default supabase;
