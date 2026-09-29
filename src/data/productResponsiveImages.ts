export interface ProductResponsiveImage {
  mainSrcSet: string;
  thumbnailSrcSet: string;
}

const originalModules = import.meta.glob("/src/assets/products/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const mainModules = import.meta.glob("/src/assets/products/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
  query: {
    format: "webp",
    w: "480;768;1200",
    quality: "82",
    as: "srcset",
    imagetools: "",
  },
}) as Record<string, string>;

const thumbnailModules = import.meta.glob("/src/assets/products/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
  query: {
    format: "webp",
    w: "160;240",
    quality: "76",
    as: "srcset",
    imagetools: "",
  },
}) as Record<string, string>;

const responsiveByOriginalUrl = new Map<string, ProductResponsiveImage>();

Object.entries(originalModules).forEach(([path, originalUrl]) => {
  const mainSrcSet = mainModules[path];
  const thumbnailSrcSet = thumbnailModules[path];

  if (mainSrcSet && thumbnailSrcSet) {
    responsiveByOriginalUrl.set(originalUrl, { mainSrcSet, thumbnailSrcSet });
  }
});

export const getProductResponsiveImage = (src: string): ProductResponsiveImage | undefined =>
  responsiveByOriginalUrl.get(src);