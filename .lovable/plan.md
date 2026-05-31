## Goal
Replace the top navigation with the new 8-item structure. No homepage redesign, no section changes beyond adding `id` anchors needed for hash links.

## Changes

### 1. `src/components/site-nav.tsx` — update nav links
Replace the `links` array with:
- Home → `/`
- Ecosystem → `/#ecosystem`
- Destinations → `/#destinations`
- Vendors → `/vendors`
- Investors → `/investors`
- Shop → `/shop`
- Virtual Tour → `/virtual-tour`
- Contact → `/#contact`

Use `<a href="...">` for hash links (TanStack `<Link to>` doesn't handle in-page anchors cleanly), keep `<Link>` for real routes. Same dark/gold styling, same mobile menu behavior. The "Invest" CTA button on the right stays as-is.

Footer: add `id="contact"` to the existing `<footer>` element so the Contact link scrolls there. No visual change.

### 2. `src/routes/index.tsx` — add anchor IDs only
Add `id="ecosystem"` to the existing "05 — The Ecosystem" Section, and `id="destinations"` to the existing "06 — Future Retail Destinations" Section. This requires extending the `Section` helper to accept an optional `id` prop (passed through to the underlying `<section>`). No content/style changes.

### 3. New placeholder routes
- `src/routes/shop.tsx` — minimal page: `SiteNav`, centered `<h1>Shop Coming Soon</h1>` using existing `font-display` + gold accent, `SiteFooter`.
- `src/routes/virtual-tour.tsx` — same pattern with title "Virtual Tour Coming Soon".

Both use existing tokens (`bg-background`, `text-foreground`, `text-gold`) for full visual consistency. Each gets a `head()` with title + description.

### 4. Untouched
Hero, all existing sections, copy, images, colors, typography, animations, the `SiteFooter` content, the `/collective`, `/booking`, `/investors`, `/vendors` pages, and the "Invest" CTA button.

## Notes
Adding `id` attributes and a passthrough prop on the `Section` helper is the minimum required for the hash-based Ecosystem/Destinations/Contact links to work. No visual or layout impact.