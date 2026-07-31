import { Suspense, useEffect, useRef, useState, type ReactNode } from "react";

interface DeferUntilVisibleProps {
  children: ReactNode;
  /** Reserved space (px) while the content is not mounted yet, avoids layout shift. */
  minHeight?: number;
  /** How far ahead of the viewport the content starts mounting. */
  rootMargin?: string;
  className?: string;
}

/**
 * Mounts heavy, non-critical content only when it approaches the viewport.
 * Keeps the main thread free during the initial render (lower TBT) without
 * changing the visual result once the section is reached.
 */
const DeferUntilVisible = ({
  children,
  minHeight = 320,
  rootMargin = "400px 0px",
  className,
}: DeferUntilVisibleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) return;
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShow(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          setShow(true);
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [show, rootMargin]);

  return (
    <div ref={ref} className={className} style={show ? undefined : { minHeight }}>
      {show ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  );
};

export default DeferUntilVisible;
