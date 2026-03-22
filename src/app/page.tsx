/**
 * @fileoverview Home page - Main landing page for AiDOiT
 */

import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Process } from "@/sections/Process";
import { LiftMotivation } from "@/sections/LiftMotivation";
import { Footer } from "@/sections/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";

/**
 * Homepage component - Renders the complete landing page
 * Each section is wrapped in an error boundary for resilience
 */
export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-black">
      {/* Header Section */}
      <ErrorBoundary name="Header">
        <Header />
      </ErrorBoundary>

      {/* Hero Section */}
      <ErrorBoundary name="Hero">
        <Hero />
      </ErrorBoundary>

      {/* Process/How It Works Section */}
      <ErrorBoundary name="Process">
        <Process />
      </ErrorBoundary>

      {/* Call to Action Section */}
      <ErrorBoundary name="LiftMotivation">
        <LiftMotivation />
      </ErrorBoundary>

      {/* Footer Section */}
      <ErrorBoundary name="Footer">
        <Footer />
      </ErrorBoundary>
    </main>
  );
}
