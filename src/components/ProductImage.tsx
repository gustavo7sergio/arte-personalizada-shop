import { useState, useCallback, useRef, useEffect } from "react";
import { ImageOff } from "lucide-react";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

const MAX_RETRIES = 5;
const RETRY_DELAYS = [300, 800, 2000, 4000, 8000];

const ProductImage = ({ src, alt, className }: ProductImageProps) => {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const retryCount = useRef(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  // Reset state when src changes
  useEffect(() => {
    setFailed(false);
    setLoaded(false);
    retryCount.current = 0;
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [src]);

  const handleError = useCallback(() => {
    if (retryCount.current < MAX_RETRIES) {
      const delay = RETRY_DELAYS[retryCount.current] || 8000;
      retryCount.current += 1;
      timerRef.current = setTimeout(() => {
        if (imgRef.current) {
          // Re-assign original src to force browser retry without cache-busting
          // (bundled assets don't need cache-busting, they have hashed filenames)
          const img = imgRef.current;
          img.src = "";
          // Use requestAnimationFrame to ensure the browser registers the src change
          requestAnimationFrame(() => {
            img.src = src;
          });
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
