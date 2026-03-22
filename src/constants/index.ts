/**
 * @fileoverview Global constants for the AiDOiT landing page
 */

/* ============================================================================
 * SITE METADATA
 * ============================================================================ */

export const SITE_METADATA = {
  TITLE: "AiDOiT - Ai MVP & Agent Development in 1 Week",
  DESCRIPTION:
    "Build AI agents and MVPs for your software company in just 1 week. We specialize in rapid AI-powered application development using cutting-edge AI tools and modern tech stack.",
  KEYWORDS:
    "Ai MVP, AI Agents, MVP Development, Software Development, AI Development, Startups, Fast MVP Development",
  URL: "https://aidoit.dev",
  IMAGE: "/og-image.png",
} as const;

/* ============================================================================
 * NAVIGATION & LINKS
 * ============================================================================ */

export const EXTERNAL_LINKS = {
  CALENDAR: "https://cal.com/aidoit.dev/mvp",
  TWITTER: "https://x.com/Aidoit_dev",
  LINKEDIN: "https://linkedin.com",
  GITHUB: "https://github.com",
} as const;

export const NAVIGATION_LINKS = {
  HOW_IT_WORKS: "#how-it-works",
  PRICING: "#pricing",
  FEATURES: "#features",
} as const;

/* ============================================================================
 * ANIMATION CONFIG
 * ============================================================================ */

export const ANIMATION_CONFIG = {
  STAGGER_DELAY: 0.15,
  INITIAL_DELAY: 0.1,
  TRANSITION_DURATION: 0.8,
  SPRING_STIFFNESS: 100,
  FLOAT_DURATION: 6,
  ROTATE_DURATION: 20,
} as const;

export const ANIMATION_EASING = {
  EASE_IN_OUT: "easeInOut",
  LINEAR: "linear",
  EASE_OUT: "easeOut",
} as const;

/* ============================================================================
 * COLOR & STYLING
 * ============================================================================ */

export const COLORS = {
  PRIMARY_PURPLE: "#4637B4",
  GRADIENT_PINK: "#FF3BFF",
  GRADIENT_PEACH: "#ECBFBF",
  GRADIENT_BLUE: "#5C24FF",
  BLUE_500: "#FF3BFF", // Interactive effects
  PURPLE_500: "#5C24FF", // Interactive effects
  WHITE_OPACITY_10: "rgba(255, 255, 255, 0.1)",
  WHITE_OPACITY_20: "rgba(255, 255, 255, 0.2)",
  WHITE_OPACITY_40: "rgba(255, 255, 255, 0.4)",
  WHITE_OPACITY_60: "rgba(255, 255, 255, 0.6)",
  WHITE_OPACITY_70: "rgba(255, 255, 255, 0.7)",
  WHITE_OPACITY_80: "rgba(255, 255, 255, 0.8)",
} as const;

/* ============================================================================
 * COMPONENT CONFIG
 * ============================================================================ */

export const HERO_CONFIG = {
  AVAILABLE_SPOTS: 3,
  AVAILABLE_MONTH: "March",
  HEADLINE_1: "Launch Your Ai MVP",
  HEADLINE_2: "In 1 Week.",
  HEADLINE_3: "",
  SUBHEADLINE: "From idea to production-ready product. No lengthy development cycles, no surprises.",
} as const;

export const PRICING_SECTION = {
  BADGE_TEXT: "Transparent Pricing",
  TITLE: "Simple, No-Hidden-Fee Pricing",
  SUBTITLE:
    "Choose the plan that fits your startup's needs. All plans include 7-day delivery guarantee.",
} as const;

export const PROCESS_SECTION = {
  BADGE_TEXT: "Our Process",
  TITLE: "How It Works",
  SUBTITLE: "A simple, proven process to get your MVP from idea to launch in 1 week",
} as const;

export const FEATURES_SECTION = {
  BADGE_TEXT: "Why Choose AiDOiT",
  TITLE: "Why We're Different",
  SUBTITLE:
    "We combine cutting-edge AI tools with expert development to deliver your MVP faster and better than anyone else.",
} as const;

export const TESTIMONIALS_SECTION = {
  BADGE_TEXT: "Social Proof",
  TITLE: "What Our Clients Say",
  SUBTITLE: "Real feedback from founders and CTOs who shipped their products with us",
  AUTO_SLIDE_INTERVAL: 5000, // milliseconds
} as const;

export const CTA_SECTION = {
  TITLE: "Ready for Liftoff?",
  SUBTITLE: "Stop planning, start building. Your Ai MVP is waiting to launch.",
  BUTTON_TEXT: "Schedule Strategy Call",
} as const;

export const FOOTER_CONFIG = {
  BRAND_NAME: "AiDOiT",
  BRAND_DESCRIPTION:
    "Transforming startup ideas into market-ready AI products in 1 week. Built for founders, by builders.",
} as const;

/* ============================================================================
 * SUPABASE CONFIG
 * ============================================================================ */

export const SUPABASE_CONFIG = {
  URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
} as const;

/* ============================================================================
 * GOOGLE ANALYTICS CONFIG
 * ============================================================================ */

export const ANALYTICS_CONFIG = {
  GTM_ID: process.env.NEXT_PUBLIC_GTM_ID || "G-XXXXXXXXXX",
} as const;

/* ============================================================================
 * RESPONSIVE BREAKPOINTS (Mirror Tailwind breakpoints)
 * ============================================================================ */

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
} as const;

/* ============================================================================
 * Z-INDEX LAYERS
 * ============================================================================ */

export const Z_INDEX = {
  BACKGROUND: 0,
  CONTENT: 10,
  HEADER: 50,
  MODAL: 100,
  TOOLTIP: 110,
} as const;

/* ============================================================================
 * TIMING
 * ============================================================================ */

export const DEBOUNCE_DELAYS = {
  MOUSE_MOVE: 16, // ~60fps
  SCROLL: 100,
  RESIZE: 100,
} as const;

export const THROTTLE_DELAYS = {
  MOUSE_MOVE: 16,
  SCROLL: 100,
} as const;
