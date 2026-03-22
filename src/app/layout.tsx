/**
 * @fileoverview Root layout component for the entire application
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Script from "next/script";
import { SITE_METADATA, ANALYTICS_CONFIG } from "@/constants";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

/** SEO and metadata configuration */
export const metadata: Metadata = {
  title: SITE_METADATA.TITLE,
  description: SITE_METADATA.DESCRIPTION,
  keywords: SITE_METADATA.KEYWORDS,
  openGraph: {
    title: SITE_METADATA.TITLE,
    description: SITE_METADATA.DESCRIPTION,
    url: SITE_METADATA.URL,
    type: "website",
    siteName: "AiDOiT",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.TITLE,
    description: SITE_METADATA.DESCRIPTION,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Root layout component wrapping the entire application
 * Includes global styling, fonts, and analytics configuration
 *
 * @param children - Page content
 */
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Configuration */}
        {ANALYTICS_CONFIG.GTM_ID && ANALYTICS_CONFIG.GTM_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GTM_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${ANALYTICS_CONFIG.GTM_ID}', {
                    page_path: window.location.pathname,
                  });
                  
                  // Track custom events
                  window.trackEvent = (eventName, eventData) => {
                    gtag('event', eventName, eventData);
                  };
                  
                  // Track CTA clicks
                  document.addEventListener('click', function(e) {
                    if (e.target.closest('a[href*="cal.com"]')) {
                      gtag('event', 'schedule_call', {
                        'event_category': 'engagement',
                        'event_label': e.target.closest('a[href*="cal.com"]')?.textContent
                      });
                    }
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={twMerge(
          inter.className,
          "bg-black text-white antialiased overflow-x-hidden"
        )}
      >
        {/* Wrap app with error boundary for graceful error handling */}
        <ErrorBoundary name="RootLayout">
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
