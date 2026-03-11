import { useState, useRef, useEffect } from "react";
import { ImageOff } from "lucide-react";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProductImage = ({ src, alt, className }: ProductImageProps) => {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const imgRef = useRef<HTMLImageElement>(null);

  // Reset on src change & check if already complete (cached)
  useEffect(() => {
    setStatus("loading");
    // Use rAF to check after the browser has painted the element
    const raf = requestAnimationFrame(() => {
      if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
        setStatus("loaded");
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [src]);

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
    <>
      {status === "loading" && (
        <div className={`flex items-center justify-center bg-muted/20 animate-pulse ${className || ""}`}>
          <div className="w-10 h-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`${className || ""} ${status === "loaded" ? "" : "sr-only"}`}
        loading="lazy"
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
      />
    </>
  );
};

export default ProductImage;
