# Anton Rogozin - CV website

Static, privacy-friendly CV website for an AWS Solutions Architect and Cloud Platform Leader.

## Local preview

No dependencies or build step are required:

```bash
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173`.

## Deployment

- `main` is deployed automatically to GitHub Pages by `.github/workflows/pages.yml`.
- Cloudflare Pages can deploy the same repository with no build command and `/` as the output directory.
- Cloudflare-specific response headers are defined in `_headers`.

## Security and privacy

- No analytics, cookies, third-party scripts, remote fonts, forms, or runtime APIs.
- Content Security Policy and additional response headers are configured for Cloudflare Pages.
- Secrets and local Cloudflare configuration are excluded by `.gitignore`.
- All external links opened in a new tab use `noopener noreferrer`.

## Content

The long-form source CV is kept in `Anton_Rogozin_AWS_Solution_Architect_CV.md`. The website copy is intentionally shorter and optimized for scanning.
