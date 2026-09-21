import { cn } from "@/lib/utils";

const mascotImages = {
  checklist: {
    alt: "Gê, mascote da GS Cartões, com checklist",
    sizes: "(min-width: 768px) 176px, 112px",
  },
  lupa: {
    alt: "Gê, mascote da GS Cartões, usando uma lupa",
    sizes: "(min-width: 768px) 160px, 96px",
  },
  caminhao: {
    alt: "Gê, mascote da GS Cartões, com caminhão de entrega",
    sizes: "96px",
  },
  notebook: {
    alt: "Gê, mascote da GS Cartões, usando notebook",
    sizes: "96px",
  },
  pensativo: {
    alt: "Gê, mascote da GS Cartões, pensativo",
    sizes: "(min-width: 768px) 176px, 128px",
  },
} as const;

interface MascotImageProps {
  pose: keyof typeof mascotImages;
  className?: string;
}

const MascotImage = ({ pose, className }: MascotImageProps) => {
  const image = mascotImages[pose];

  return (
    <img
      src={`/mascote/ge-${pose}-192.webp`}
      srcSet={`/mascote/ge-${pose}-192.webp 192w, /mascote/ge-${pose}-384.webp 384w`}
      sizes={image.sizes}
      alt={image.alt}
      width={1254}
      height={1254}
      loading="lazy"
      decoding="async"
      className={cn("block h-auto object-contain", className)}
    />
  );
};

export default MascotImage;