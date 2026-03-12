import { useCallback, useEffect, useRef, useState } from "react";
import { ImageOff } from "lucide-react";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

const MAX_RETRIES = 2;
const RETRY_DELAYS_MS = [500, 1500];

const appendRetryParam = (url: string, attempt: number) => {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}retry=${attempt}-${Date.now()}`;
};

const ProductImage = ({ src, alt, className }: ProductImageProps) => {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const [displaySrc, setDisplaySrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);
  const retryCountRef = useRef(0);
  const retryTimeoutRef = useRef<number | null>(null);
  const requestTokenRef = useRef(0);

  const clearRetryTimeout = () => {
    if (retryTimeoutRef.current !== null) {
      window.clearTimeout(retryTimeoutRef.current);
      retryTimeoutRef.current = null;
    }
  };

  const scheduleRetry = useCallback(() => {
    if (retryCountRef.current >= MAX_RETRIES) {
      setStatus("error");
      return;
    }

    const nextAttempt = retryCountRef.current + 1;
    retryCountRef.current = nextAttempt;
    setStatus("loading");
    clearRetryTimeout();

    const currentToken = requestTokenRef.current;
    retryTimeoutRef.current = window.setTimeout(() => {
      if (requestTokenRef.current !== currentToken) return;
      setDisplaySrc(appendRetryParam(src, nextAttempt));
    }, RETRY_DELAYS_MS[nextAttempt - 1] ?? 2000);
  }, [src]);

  useEffect(() => {
    requestTokenRef.current += 1;
    retryCountRef.current = 0;
    clearRetryTimeout();
    setDisplaySrc(src);
    setStatus("loading");

    const raf = requestAnimationFrame(() => {
      const img = imgRef.current;
      if (!img || !img.complete) return;
      if (img.naturalWidth > 0) {
        setStatus("loaded");
        return;
      }
      scheduleRetry();
    });

    return () => {
      cancelAnimationFrame(raf);
      clearRetryTimeout();
    };
  }, [src, scheduleRetry]);

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
        ref={imgRef}
        src={displaySrc}
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

