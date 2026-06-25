import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

interface ProductVideoProps {
  videoId: string;
  title?: string;
}

export default function ProductVideo({ videoId, title = "Veja o produto em vídeo" }: ProductVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loadIframe, setLoadIframe] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1&playsinline=1`;

  return (
    <div ref={containerRef} className="w-full md:max-w-3xl md:mx-auto">
      <h2 className="text-xl font-display font-semibold text-foreground mb-3">{title}</h2>
      <div className="relative w-full rounded-2xl overflow-hidden border border-border bg-muted/20 aspect-video">
        {loadIframe ? (
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            onClick={() => setLoadIframe(true)}
            className="absolute inset-0 w-full h-full flex items-center justify-center group cursor-pointer"
            aria-label="Reproduzir vídeo"
          >
            {/* Thumbnail otimizado do YouTube */}
            {isVisible && (
              <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={title}
                width={480}
                height={360}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
            )}
            {/* Overlay escuro sutil */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
            {/* Botão play */}
            <div className="relative z-10 bg-primary/90 group-hover:bg-primary text-primary-foreground rounded-full p-4 shadow-lg transition-transform group-hover:scale-110">
              <Play className="h-6 w-6 fill-current ml-0.5" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
