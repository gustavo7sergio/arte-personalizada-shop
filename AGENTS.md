# Project architecture rules

- Product galleries resolve responsive WebP variants through `productResponsiveImages`; keep original asset URLs as SEO and zoom fallbacks so metadata remains stable and image quality is preserved.
- Route-level lazy imports use `lazyWithReload` so a stale deployment chunk triggers one safe refresh instead of leaving a blank screen.