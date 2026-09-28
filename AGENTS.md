<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- The portfolio is a TanStack Start app, not a single-page tab switcher: routes are `/` (hero sliding gallery + works grid), `/statement`, `/works/$artworkId` (WorkDetailModal rendered over WorksGrid, close navigates home), `/timeline`, `/cv`, `/residency`, `/archive`. Navigation/Footer use TanStack `Link`, not tab state.
- Global overlays (AppliedPracticeArchiveModal, CuratorialContactModal, LandscapePortfolioPdfModal) live in `SiteChrome` (`src/components/SiteChrome.tsx`) with a `useSiteChrome()` context so any route can open them.
- Typography: Cormorant Garamond display + IBM Plex Mono metadata + Plus Jakarta Sans body, loaded via `<link>` in `__root.tsx` head and mapped through `--font-serif-display` / `--font-mono-code` / `--font-sans` in `src/styles.css`. Original app forced all three to the sans font; the monograph redesign restores a real serif/mono pairing.
- Original-repository images remain `.webp` files under `public/assets` and use `resolveAsset`; newly uploaded archival photographs use Lovable Assets JSON pointers to keep binaries out of the repository.
- The original repo's strict-mode gaps (array index access, missing PDF-modal state) were fixed in place; keep `bunx tsgo --noEmit` clean.
