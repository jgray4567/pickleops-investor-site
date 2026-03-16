# PickleOps Investor Website (Draft v1)

Location:
`/Users/jsg/.openclaw/workspace/pickleops-investor-site`

## Run locally

```bash
cd /Users/jsg/.openclaw/workspace/pickleops-investor-site
python3 -m http.server 8096
```

Open: `http://localhost:8096`

## Contents
- `index.html` — gateway/sign-in page
- `investor.html` — private investor narrative page
- `assets/styles.css` — styling
- `assets/app.js` — data visualizations (Chart.js)
- `assets/gateway.js` — access code gate logic

### Access code
Edit `assets/gateway.js` and change `ACCESS_CODE` before sharing.

## Notes
- Metrics include planning scenarios and market signals from current research docs.
- Replace placeholders/finalize sourced figures before investor distribution.

## Next steps
1. Replace source section with finalized citations.
2. Add persona photos from Drive.
3. Publish to a public URL (Vercel/Cloudflare Pages/GitHub Pages).
