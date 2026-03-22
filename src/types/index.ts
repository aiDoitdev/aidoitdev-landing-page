/**
 * @fileoverview Global type definitions for the AiDOiT landing page
 */

/**
 * Represents a feature or service offering
 */
export interface Feature {
  icon: string;
  title: string;
  description: string;
  isNew?: boolean;
  backgroundPositionX: number;
  backgroundPositionY: number;
  backgroundSizeX: number;
}

/**
 * Represents a pricing plan with its details and features
 */
export interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  isPopular?: boolean;
}

/**
 * Individual pricing feature
 */
export interface PricingFeature {
  text: string;
}

/**
 * Represents a step in the process timeline
 */
export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  output: string;
  icon: JSX.Element;
}

/**
 * Represents a customer testimonial
 */
export interface Testimonial {
  text: string;
  name: string;
  title: string;
  avatarImg: {
    src: string;
    width: number;
    height: number;
  };
}

/**
 * Mouse position tracking for interactive effects
 */
export interface MousePosition {
  x: number;
  y: number;
}

/**
 * Animation variant configuration for Framer Motion
 */
export interface AnimationVariants {
  hidden: Record<string, unknown>;
  visible: Record<string, unknown>;
}

/**
 * Navigation link structure
 */
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * Social media link
 */
export interface SocialLink {
  name: string;
  href: string;
  icon: JSX.Element;
}

/**
 * Application configuration
 */
export interface AppConfig {
  siteTitle: string;
  siteDescription: string;
  siteUrl: string;
  calendarUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  analytics: {
    googleTagManagerId: string;
  };
}

/**
 * Supabase client configuration
 */
export interface SupabaseConfig {
  url: string | undefined;
  anonKey: string | undefined;
}
