UPPC DIGITAL MUSEUM — FINAL DELIVERY NOTES

This final package connects the staff workspace to Supabase through the browser's REST APIs, avoiding a required client SDK dependency.

Production-connected features:
- staff sign-in
- staff profile/role verification
- collections read/write/delete/publish
- archive read/write/delete/publish
- archive file upload to private storage
- public collection image upload
- exhibition read/write/delete/publish
- visitor request submission from public site
- visitor approval/completion from admin
- JSON export
- RLS-backed access model

Demo fallback:
If VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY are missing, the public site remains viewable and the admin route shows a clearly labelled demo-mode screen. It never claims remote storage in demo mode.

The package does not contain production credentials.
