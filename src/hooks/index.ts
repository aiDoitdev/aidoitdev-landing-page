/**
 * @fileoverview Custom React hooks for animation and interaction logic
 */

"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { throttle } from "@/utils/common";
import type { MousePosition } from "@/types";

/**
 * Hook to track mouse position for interactive effects
 * Returns normalized values from 0-10 based on viewport percentage
 *
 * @returns Current mouse position
 *
 * @example
 * const mousePos = useMousePosition();
 * // Use with framer-motion animate={{ x: mousePos.x }}
 */
export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = throttle((e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 10,
        y: (e.clientY / window.innerHeight) * 10,
      });
    }, 16); // ~60fps

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}

/**
 * Hook to detect if element is in viewport
 * Useful for triggering animations on scroll
 *
 * @returns Array of [isInView, ref]
 *
 * @example
 * const [isInView, ref] = useInView();
 * <div ref={ref}>
 *   {isInView && <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} />}
 * </div>
 */
export function useInView(
  options = { threshold: 0.1, once: true }
): [boolean, React.RefObject<HTMLDivElement>] {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.once) {
          observer.unobserve(entry.target);
        }
      } else if (!options.once) {
        setIsInView(false);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [isInView, ref];
}

/**
 * Hook to handle component mounting state
 * Prevents hydration mismatches
 *
 * @returns True if component is mounted on client
 *
 * @example
 * const isMounted = useIsMounted();
 * if (!isMounted) return null;
 * // Client-specific code
 */
export function useIsMounted(): boolean {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}

/**
 * Hook to detect if user prefers reduced motion
 * Returns true if user has prefers-reduced-motion enabled
 *
 * @returns True if reduced motion is preferred
 *
 * @example
 * const prefersReducedMotion = usePrefersReducedMotion();
 * <motion.div animate={prefersReducedMotion ? {} : { y: 20 }} />
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent): void => {
      setPrefersReduced(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersReduced;
}

/**
 * Hook to track window size and handle responsive behavior
 *
 * @returns Window dimensions
 *
 * @example
 * const { width, height } = useWindowSize();
 * const isMobile = width < 768;
 */
export function useWindowSize(): { width: number; height: number } {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = throttle(() => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 100);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}

/**
 * Hook to handle click outside detection
 * Useful for closing modals and dropdowns
 *
 * @param ref - Reference to element
 * @param callback - Function to call on outside click
 *
 * @example
 * const ref = useRef(null);
 * useClickOutside(ref, () => setIsOpen(false));
 * <div ref={ref}>Content</div>
 */
export function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  callback: () => void
): void {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

/**
 * Hook to manage previous value
 * Useful for comparing old and new values
 *
 * @param value - Current value
 * @returns Previous value
 *
 * @example
 * const count = 5;
 * const prevCount = usePrevious(count);
 * // prevCount is the previous value of count
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

/**
 * Hook for debounced value
 * Delays updating a value until user stops changing it
 *
 * @param value - Value to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced value
 *
 * @example
 * const [search, setSearch] = useState("");
 * const debouncedSearch = useDebouncedValue(search, 300);
 */
export function useDebouncedValue<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Hook to handle async operations
 * Returns loading state and error
 *
 * @param asyncFunc - Async function to execute
 * @param dependencies - Dependency array
 *
 * @example
 * const { data, loading, error } = useAsync(() => fetchData(), []);
 */
export function useAsync<T>(
  asyncFunc: () => Promise<T>,
  dependencies: React.DependencyList
): {
  data: T | null;
  loading: boolean;
  error: Error | null;
} {
  const [state, setState] = useState<{
    data: T | null;
    loading: boolean;
    error: Error | null;
  }>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    setState({ data: null, loading: true, error: null });

    asyncFunc()
      .then((data) => {
        if (isMounted) {
          setState({ data, loading: false, error: null });
        }
      })
      .catch((error) => {
        if (isMounted) {
          setState({ data: null, loading: false, error });
        }
      });

    return () => {
      isMounted = false;
    };
  }, dependencies);

  return state;
}
