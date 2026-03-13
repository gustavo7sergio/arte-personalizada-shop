import { useCallback, useEffect, useRef, useState } from "react";
import { ImageOff } from "lucide-react";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

const MAX_RETRIES = 5;
const RETRY_DELAYS_MS = [700, 1500, 2500, 4000, 6000];

const ProductImage = ({ src, alt, className }: ProductImageProps) => {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const [retrySeed, setRetrySeed] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const retryCountRef = useRef(0);
  const retryTimeoutRef = useRef<number | null>(null);
  const requestTokenRef = useRef(0);

  const clearRetryTimeout = useCallback(() => {
    if (retryTimeoutRef.current !== null) {
      window.clearTimeout(retryTimeoutRef.current);
      retryTimeoutRef.current = null;
    }
  }, []);

  const scheduleRetry = useCallback(() => {
    if (retryCountRef.current >= MAX_RETRIES) {
      setStatus("error");
      return;
    }

    const nextAttempt = retryCountRef.current + 1;
    retryCountRef.current = nextAttempt;
    clearRetryTimeout();

    const currentToken = requestTokenRef.current;
    retryTimeoutRef.current = window.setTimeout(() => {
      if (requestTokenRef.current !== currentToken) return;
      setStatus("loading");
      setRetrySeed(nextAttempt);
    }, RETRY_DELAYS_MS[nextAttempt - 1] ?? 6000);
  }, [clearRetryTimeout]);

  useEffect(() => {
    requestTokenRef.current += 1;
    retryCountRef.current = 0;
    clearRetryTimeout();
    setRetrySeed(0);
    setStatus("loading");

    return () => {
      clearRetryTimeout();
    };
  }, [src, clearRetryTimeout]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const img = imgRef.current;
      if (!img || !img.complete) return;

      if (img.naturalWidth > 0) {
        clearRetryTimeout();
        setStatus("loaded");
        return;
      }

      scheduleRetry();
    });

    return () => cancelAnimationFrame(raf);
  }, [src, retrySeed, scheduleRetry, clearRetryTimeout]);

  if (status === "error") {
    return (
      <div className={`flex items-center justify-center bg-muted/30 ${className || ""}`}>
        <div className="text-center text-muted-foreground/50 p-4">
          <ImageOff className="h-8 w-8 mx-auto mb-2" />
          <p className="text-xs font-body">Imagem indisponível</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {status === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
          <div className="w-10 h-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
        </div>
      )}

      <img
        key={`${src}-${retrySeed}`}
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`${className || ""} absolute inset-0 transition-opacity duration-200 ${
          status === "loaded" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onLoad={() => {
          clearRetryTimeout();
          setStatus("loaded");
        }}
        onError={scheduleRetry}
      />
    </div>
  );
};

export default ProductImage;

