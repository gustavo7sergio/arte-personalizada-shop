import { useEffect, useRef, useState } from "react";
import { ImageOff } from "lucide-react";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProductImage = ({ src, alt, className }: ProductImageProps) => {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setStatus("loading");

    const raf = requestAnimationFrame(() => {
      const img = imgRef.current;
      if (!img || !img.complete) return;
      setStatus(img.naturalWidth > 0 ? "loaded" : "error");
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
    <div className="relative w-full h-full">
      {status === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
          <div className="w-10 h-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
        </div>
      )}

      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`${className || ""} absolute inset-0 transition-opacity duration-200 ${
          status === "loaded" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
      />
    </div>
  );
};

export default ProductImage;
