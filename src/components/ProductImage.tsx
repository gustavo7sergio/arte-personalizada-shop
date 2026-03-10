import { useState, useCallback, useRef } from "react";
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
  const imgRef = useRef<HTMLImageElement>(null);

  const handleError = useCallback(() => {
    if (retryCount.current < MAX_RETRIES) {
      const delay = RETRY_DELAYS[retryCount.current] || 3000;
      retryCount.current += 1;
      setTimeout(() => {
        if (imgRef.current) {
          // Force reload with cache-busting parameter
          imgRef.current.src = src + (src.includes("?") ? "&" : "?") + "retry=" + retryCount.current + "&t=" + Date.now();
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
        loading="eager"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={handleError}
      />
    </>
  );
};

export default ProductImage;
