import { useState, useCallback, useRef, useEffect } from "react";
import { ImageOff } from "lucide-react";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

const MAX_RETRIES = 3;
const RETRY_DELAYS = [500, 1500, 3000];

const ProductImage = ({ src, alt, className }: ProductImageProps) => {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const retryCount = useRef(0);
  const isRetrying = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  // Reset state when src changes
  useEffect(() => {
    setFailed(false);
    setLoaded(false);
    retryCount.current = 0;
    isRetrying.current = false;
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [src]);

  const handleError = useCallback(() => {
    // Ignore errors triggered during retry cycle (from clearing src)
    if (isRetrying.current) return;

    if (retryCount.current < MAX_RETRIES) {
      const delay = RETRY_DELAYS[retryCount.current] || 3000;
      retryCount.current += 1;
      isRetrying.current = true;
      timerRef.current = setTimeout(() => {
        if (imgRef.current) {
          // Create a new Image to test loading without touching the DOM element
          const testImg = new Image();
          testImg.onload = () => {
            isRetrying.current = false;
            if (imgRef.current) {
              imgRef.current.src = src;
            }
          };
          testImg.onerror = () => {
            isRetrying.current = false;
            // Trigger handleError again for next retry
            handleError();
          };
          testImg.src = src;
        }
      }, delay);
    } else {
      setFailed(true);
    }
  }, [src]);

  if (failed) {
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
    <>
      {!loaded && (
        <div className={`flex items-center justify-center bg-muted/20 animate-pulse ${className || ""}`}>
          <div className="w-12 h-12 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`${className || ""} ${loaded ? "" : "hidden"}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={handleError}
      />
    </>
  );
};

export default ProductImage;
