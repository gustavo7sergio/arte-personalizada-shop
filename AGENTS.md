# Project architecture rules

- Product galleries resolve responsive WebP variants through `productResponsiveImages`; keep original asset URLs as SEO and zoom fallbacks so metadata remains stable and image quality is preserved.
- Route-level lazy imports use `lazyWithReload` so a stale deployment chunk triggers one safe refresh instead of leaving a blank screen.
- Meta browser reporting is centralized in `metaPixel` and gated on current advertising consent before every send; route/product effects own view events, cart actions own additions/cart quotes, and one delegated listener owns WhatsApp links to avoid duplicate reporting.
- Advertising consent keeps versioned notice evidence and decision history in first-party browser storage, with cross-tab withdrawal; never send customer matching data or infer purchases from WhatsApp clicks.
- Marketing requires explicit acceptance worldwide; geographic defaults cannot grant it, keeping the site's consent promise consistent.
- Keep the cart context identity and shared types in the component-free `cartState` module so Fast Refresh cannot give providers and consumers different contexts.