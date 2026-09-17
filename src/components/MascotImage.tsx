import checklistAsset from "@/assets/mascote/ge-checklist.webp.asset.json";
import lupaAsset from "@/assets/mascote/ge-lupa.webp.asset.json";
import caminhaoAsset from "@/assets/mascote/ge-caminhao.webp.asset.json";
import notebookAsset from "@/assets/mascote/ge-notebook.webp.asset.json";
import pensativoAsset from "@/assets/mascote/ge-pensativo.webp.asset.json";
import { cn } from "@/lib/utils";

const mascotImages = {
  checklist: {
    src: checklistAsset.url,
    alt: "Gê, mascote da GS Cartões, com checklist",
  },
  lupa: {
    src: lupaAsset.url,
    alt: "Gê, mascote da GS Cartões, usando uma lupa",
  },
  caminhao: {
    src: caminhaoAsset.url,
    alt: "Gê, mascote da GS Cartões, com caminhão de entrega",
  },
  notebook: {
    src: notebookAsset.url,
    alt: "Gê, mascote da GS Cartões, usando notebook",
  },
  pensativo: {
    src: pensativoAsset.url,
    alt: "Gê, mascote da GS Cartões, pensativo",
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
      src={image.src}
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