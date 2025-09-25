# Evercurrent.agency Website

This project is a Next.js 14 (App Router) build styled with Tailwind CSS for the Evercurrent.agency launch kit. It includes a services hub, vertical service pages, case studies, resources, audit and contact funnels, plus legal pages.

## Getting Started

```bash
npm install
npm run dev
```

Development server runs at `http://localhost:3000`.

### Environment Variables

Copy `.env.example` to `.env.local` (or configure in your hosting provider) and populate:

- `ZAPIER_WEBHOOK_URL` – Zapier Catch Hook URL that stores new leads.
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` – Plausible domain (e.g. `evercurrent.agency`).
- `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC` (optional) – override Plausible script source if self-hosting.

## Production Build

```bash
npm run build
npm run start
```

The build output is generated in `.next/`.

## Deployment Notes

- **Vercel/Netlify** – set the build command to `npm run build` and output directory to `.next` (Vercel detects this automatically).
- **Environment variables** – add the values above to your deployment target. The lead API returns 503 if `ZAPIER_WEBHOOK_URL` is missing.
- **Analytics** – once `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is configured, Plausible loads automatically via `components/analytics.tsx`.
- **Lead form** – `/app/api/lead/route.ts` posts submissions to the Zapier webhook. Monitor Zapier for delivery errors.

## Scripts

- `npm run lint` – (optional) run ESLint locally if you install the config.
- `npm run dev` – start dev server.
- `npm run build` – create production build (validated).
- `npm run start` – serve the production build locally.

## Testing Checklist Before Launch

1. Replace placeholder contact emails in CTA buttons/forms (`hello@example.com`).
2. Update brand imagery (favicon, social share image) in `public/`.
3. Deploy with your `.env` values and confirm Plausible events fire via real traffic.
4. Confirm the Zapier webhook receives form submissions (test the contact/audit forms).
5. Run `npm audit` and address vulnerabilities if desired.

