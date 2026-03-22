/**
 * @fileoverview Error boundary component for graceful error handling
 */

"use client";

import React, { ReactNode } from "react";
import { createLogger } from "@/utils/logger";

const logger = createLogger("ErrorBoundary");

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  name?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error boundary component that catches errors in child components
 * Prevents entire app from crashing on component errors
 *
 * @example
 * <ErrorBoundary name="Hero Section" fallback={<ErrorFallback />}>
 *   <HeroSection />
 * </ErrorBoundary>
 */
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    logger.error(`Error caught in ${this.props.name || "ErrorBoundary"}:`, error);
    logger.debug("Error info:", errorInfo.componentStack);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <h2 className="text-red-800 font-semibold">
            Something went wrong{this.props.name ? ` in ${this.props.name}` : ""}
          </h2>
          <p className="text-red-700 text-sm mt-2">{this.state.error?.message}</p>
          {process.env.NODE_ENV === "development" && (
            <pre className="text-xs mt-2 bg-red-100 p-2 rounded overflow-auto">
              {this.state.error?.stack}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Default error fallback component
 */
export function ErrorFallback(): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
        <p className="text-white/70 mb-8">We're sorry for the inconvenience. Please try refreshing the page.</p>
        <button
          onClick={() => window.location.reload()}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}
