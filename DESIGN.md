# CV website design system

## Product context

- **What this is:** A personal CV and professional contact page for Anton Rogozin.
- **Who it's for:** Technical recruiters, engineering leaders, and hiring managers for AWS architecture roles.
- **Project type:** Print-friendly personal website.

## Aesthetic direction

Quiet, editorial, and technical. The page should feel like a well-edited professional document rather than a marketing landing page. The content and architecture decisions carry the authority; decoration stays subordinate.

## Typography

- **Family:** system sans-serif stack for reliable loading and clear scanning.
- **Name:** 40px desktop, 36px mobile.
- **Section headings:** 22px.
- **Body:** 16px with 1.5 line-height; secondary metadata stays at 14px.
- **Print:** 10pt body with reduced spacing for A4 output.

## Color

- **Light background:** `#fafbf9`; text `#202a26`; muted text `#59635e`.
- **Accent:** `#17664c`.
- **Dark background:** `#141b18`; text `#e6ece8`; accent `#8ed3b4`.
- Borders use the same neutral family and remain subtle.

## Layout and spacing

- Maximum content width: 960px.
- Base spacing: 8px rhythm; section spacing 40px desktop and 32px mobile.
- Experience uses a three-column heading row: logo, role, dates.
- Certification badges are 44px and inline with text; they are never presented as large cards.
- Company marks are contained in a 64 × 32px area.
- Breakpoints: 900px for two-column certificates, 600px for a single-column mobile layout.

## Interaction and accessibility

- Light theme is the default; the theme choice is saved when browser storage is available.
- All links and buttons have visible `:focus-visible` outlines and a minimum 44px interaction height.
- Images include dimensions and descriptive empty alt text because adjacent text carries their meaning.
- No remote scripts, fonts, analytics, cookies, forms, or runtime API calls.
- Print output removes controls and keeps experience entries and certificates together where possible.

## Decisions log

| Date | Decision | Reason |
| --- | --- | --- |
| 2026-09-17 | Compact editorial CV layout | Recruiters should scan role, scope, and evidence quickly. |
| 2026-09-17 | Inline 44px certification badges | Badges provide recognition without overpowering the CV. |
| 2026-09-17 | Local image assets | The page remains available and privacy-friendly without third-party image requests. |
