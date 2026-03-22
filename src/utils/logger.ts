/**
 * @fileoverview Centralized logging utility for consistent error tracking and debugging
 */

type LogLevel = "debug" | "info" | "warn" | "error";

/**
 * Logger utility with environment-aware logging
 * Provides structured logging for debugging and monitoring
 */
class Logger {
  private isDevelopment: boolean;

  constructor() {
    this.isDevelopment = process.env.NODE_ENV === "development";
  }

  /**
   * Format log message with timestamp and level
   */
  private format(level: LogLevel, message: string, data?: unknown): string {
    const timestamp = new Date().toISOString();
    const dataStr = data ? ` ${JSON.stringify(data)}` : "";
    return `[${timestamp}] [${level.toUpperCase()}] ${message}${dataStr}`;
  }

  /**
   * Log debug message (development only)
   */
  debug(message: string, data?: unknown): void {
    if (this.isDevelopment && typeof console !== "undefined") {
      console.debug(this.format("debug", message, data));
    }
  }

  /**
   * Log info message
   */
  info(message: string, data?: unknown): void {
    if (typeof console !== "undefined") {
      console.info(this.format("info", message, data));
    }
  }

  /**
   * Log warning message
   */
  warn(message: string, data?: unknown): void {
    if (typeof console !== "undefined") {
      console.warn(this.format("warn", message, data));
    }
  }

  /**
   * Log error message
   */
  error(message: string, error?: Error | unknown): void {
    if (typeof console !== "undefined") {
      const errorData =
        error instanceof Error
          ? {
              message: error.message,
              stack: this.isDevelopment ? error.stack : undefined,
            }
          : error;

      console.error(this.format("error", message, errorData));
    }
  }

  /**
   * Log performance timing
   */
  time(label: string): void {
    if (this.isDevelopment && typeof console !== "undefined" && console.time) {
      console.time(label);
    }
  }

  /**
   * End performance timing
   */
  timeEnd(label: string): void {
    if (this.isDevelopment && typeof console !== "undefined" && console.timeEnd) {
      console.timeEnd(label);
    }
  }

  /**
   * Create a child logger with a namespace prefix
   */
  createChild(namespace: string): Logger {
    const child = Object.create(Logger.prototype);
    child.isDevelopment = this.isDevelopment;
    const originalFormat = this.format.bind(child);

    child.format = function (level: LogLevel, message: string, data?: unknown): string {
      return originalFormat(level, `[${namespace}] ${message}`, data);
    };

    return child;
  }
}

/**
 * Singleton logger instance
 */
export const logger = new Logger();

/**
 * Create a scoped logger for a specific module/component
 * @param namespace - The namespace for this logger (e.g., 'Hero', 'Header')
 */
export function createLogger(namespace: string): Logger {
  return logger.createChild(namespace);
}

export default logger;
