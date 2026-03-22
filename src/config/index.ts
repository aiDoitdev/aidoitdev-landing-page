/**
 * @fileoverview Application configuration and environment variables
 */

import { SUPABASE_CONFIG, ANALYTICS_CONFIG, SITE_METADATA } from "@/constants";
import type { AppConfig, SupabaseConfig } from "@/types";

/**
 * Validates that required environment variables are set
 * @throws Error if any required environment variables are missing
 */
const validateEnvironmentVariables = (): void => {
  const requiredVars = ["NEXT_PUBLIC_SUPABASE_URL"];

  const missingVars = requiredVars.filter((varName) => !process.env[varName]);

  if (missingVars.length > 0) {
    console.warn(
      `Warning: Missing environment variables: ${missingVars.join(", ")}. Some features may not work correctly.`
    );
  }
};

/**
 * Application configuration object
 */
export const appConfig: AppConfig = {
  siteTitle: SITE_METADATA.TITLE,
  siteDescription: SITE_METADATA.DESCRIPTION,
  siteUrl: SITE_METADATA.URL,
  calendarUrl: process.env.NEXT_PUBLIC_CALENDAR_URL || "https://cal.com/aidoit.dev/mvp",
  twitterUrl: process.env.NEXT_PUBLIC_TWITTER_URL || "https://x.com/Aidoit_dev",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com",
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com",
  analytics: {
    googleTagManagerId: ANALYTICS_CONFIG.GTM_ID,
  },
};

/**
 * Supabase configuration
 */
export const supabaseConfig: SupabaseConfig = {
  url: SUPABASE_CONFIG.URL,
  anonKey: SUPABASE_CONFIG.ANON_KEY,
};

/**
 * Environment detection utilities
 */
export const environment = {
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
  isTesting: process.env.NODE_ENV === "test",
} as const;

/**
 * Validate environment on module load
 */
if (typeof window === "undefined") {
  // Server-side only validation
  validateEnvironmentVariables();
}

export default {
  app: appConfig,
  supabase: supabaseConfig,
  environment,
};
