import { useState, useEffect } from "react";

const breakpoints = {
  sm: 640,  // min-width: 640px
  md: 768,  // min-width: 768px
  lg: 1024, // min-width: 1024px
  xl: 1280, // min-width: 1280px
  '2xl': 1536 // min-width: 1536px
};

function useBreakpoint(minWidth) {
  const [matches, setMatches] = useState(window.innerWidth >= minWidth);

  useEffect(() => {
    const handleResize = () => setMatches(window.innerWidth >= minWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [minWidth]);

  return matches;
}

// Individual hooks for each breakpoint
export const useIsSm = () => useBreakpoint(breakpoints.sm);
export const useIsMd = () => useBreakpoint(breakpoints.md);
export const useIsLg = () => useBreakpoint(breakpoints.lg);
export const useIsXl = () => useBreakpoint(breakpoints.xl);
export const useIs2xl = () => useBreakpoint(breakpoints['2xl']);
