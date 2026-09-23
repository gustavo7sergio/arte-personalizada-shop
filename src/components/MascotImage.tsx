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

const mascotHashes = {
  checklist: ["1e4d425c", "9610031d"],
  lupa: ["7fd62ee5", "31adf0d7"],
  caminhao: ["5e42a1e6", "00ebea9f"],
  notebook: ["6b8798ca", "4488041f"],
  pensativo: ["46453bf3", "1150e825"],
} as const;

interface MascotImageProps {
  pose: keyof typeof mascotImages;
  className?: string;
}

const MascotImage = ({ pose, className }: MascotImageProps) => {
  const image = mascotImages[pose];

  return (
    <img
      src={`/mascote/ge-${pose}-128.${mascotHashes[pose][0]}.webp`}
      srcSet={`/mascote/ge-${pose}-128.${mascotHashes[pose][0]}.webp 128w, /mascote/ge-${pose}-256.${mascotHashes[pose][1]}.webp 256w`}
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