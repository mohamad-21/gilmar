import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useInSize(custom = MOBILE_BREAKPOINT) {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${custom - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < custom);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < custom);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
