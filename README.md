<<<<<<< HEAD
# FL TELECOM SPCS Website

Professional Next.js website for FLORIDA TELECOMMUNICATIONS SPECIALISTS LLC.

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Requires Node.js `20.9.0` or newer.

## Checks

```bash
npm run build
```

## Images

The site uses these files in `public/images/`:

- `hero-fiber-crew.jpg`
- `truck-branding.jpg`
- `logo-fl-telecom-spcs.jpg`

Placeholder JPGs are included so deployment will not show broken images. Replace them with the final company photos/logo when available. The site references them as `/images/...`, which is the correct public path for Next.js and Vercel.

## Lead forms

The Request a Quote, Partner With Us, and Apply for Work forms submit to `/api/leads`.

For production, set `LEAD_WEBHOOK_URL` in Vercel if you want submissions forwarded to a CRM, automation tool, or email workflow endpoint. Without that variable, the API still accepts submissions and logs them in the Vercel function logs.

## Deploy to Vercel

1. Push this project to GitHub.
2. Import it in Vercel.
3. Framework preset: Next.js.
4. Build command: `npm run build`.
5. Optional environment variable: `LEAD_WEBHOOK_URL`.
6. Deploy.
=======
# fl-telecom-spcs-website
>>>>>>> a1982b22ff5fd68382ef546c8951a5f3c8eb42f1
