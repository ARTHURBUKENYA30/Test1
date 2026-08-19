# UPPC Digital Museum — GitHub / Vercel Deployment

## Recommended: GitHub + Vercel

1. Create a new GitHub repository.
2. Upload/commit the contents of this folder (the folder containing `package.json`).
3. In Vercel, choose **Add New Project** and import the GitHub repository.
4. Confirm:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.

No Supabase credentials are required just to publish the frontend. Add only the required `VITE_*` environment variables later if the database features are enabled.

## Optional: GitHub Pages

The repository includes `.github/workflows/deploy.yml`.
After pushing to `main`, open GitHub → Settings → Pages and select **GitHub Actions** as the source.

## Local test

```bash
npm install
npm run build
npm run dev
```

## Security

Never commit `.env`, `.env.local`, Supabase service-role keys, or other secrets.
