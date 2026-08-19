# UPPC Digital Museum — V6 Setup Guide

V6 adds the production backend foundation for Supabase while keeping the current local demo data available until the backend is connected.

## 1. Install Node.js
Use the current Node.js LTS release. Vite currently requires Node 20.19+ or 22.12+.

Official download: https://nodejs.org/en/download/

Check installation:

```bash
node -v
npm -v
```

## 2. Unzip the project
Extract `UPPC-Digital-Museum-Platform-v6.zip` into a folder such as:

```text
C:\Projects\UPPC-Digital-Museum
```

Open PowerShell in that folder, then enter the app folder:

```powershell
cd C:\Projects\UPPC-Digital-Museum\app
```

## 3. Install dependencies

```powershell
npm install
```

## 4. Run the website locally

```powershell
npm run dev
```

Open the local URL Vite prints, normally:

```text
http://localhost:5173/
```

Admin prototype:

```text
http://localhost:5173/admin
```

## 5. Create the real database
Create a Supabase project at https://supabase.com/.

Then open:

Supabase Dashboard → SQL Editor → New query

Copy the complete contents of:

```text
supabase/migrations/001_uppc_museum.sql
```

Paste it into SQL Editor and click Run.

This creates:
- profiles
- collections
- archive_items
- exhibitions
- visit_requests
- Row Level Security policies
- public/private museum storage buckets

## 6. Create the frontend environment file
Copy:

```text
.env.example
```

to:

```text
.env.local
```

Fill in:

```text
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```

Find these in:
Supabase Dashboard → Project Settings → API.

Never put the `service_role` key into this React/Vite application.

## 7. Create the first staff account
In Supabase:

Authentication → Users → Add user

Create the museum administrator's email and password.

Then in SQL Editor run:

```sql
insert into public.profiles (id, full_name, role)
select id, 'UPPC Museum Administrator', 'admin'
from auth.users
where email = 'ADMIN_EMAIL_HERE'
on conflict (id) do update set role = 'admin';
```

Replace `ADMIN_EMAIL_HERE` with the actual administrator email.

## 8. Important security rule
Do not make the database public for staff operations. The included SQL uses Row Level Security so public visitors can read only published museum content, while approved staff can manage records.

## 9. Upload the existing museum images
Your supplied images are already under:

```text
public/images/
```

For production, upload master photographs and large media files to Supabase Storage. Keep the original high-resolution files archived separately as preservation masters.

Suggested folders:

```text
museum-public/
  collections/
  exhibitions/
  education/
  thumbnails/

museum-private/
  archive-masters/
  research-restricted/
  preservation-masters/
```

## 10. Add real museum records
Before publishing any historical machine description, confirm:
- official machine name
- manufacturer
- model
- approximate date
- provenance
- former location
- accession number
- conservation condition
- historical significance
- copyright/usage status of photographs

Do not publish invented dates or machine specifications.

## 11. Test the production build

```powershell
npm run build
```

If successful, test the production build:

```powershell
npm run preview
```

## 12. Deploy the website
Recommended options include Vercel, Netlify, Cloudflare Pages or another static hosting provider that supports Vite builds.

Build command:

```text
npm run build
```

Output directory:

```text
dist
```

Add the same `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` environment variables to the hosting provider.

## 13. Connect the official domain
After deployment, point the chosen museum domain/subdomain DNS records to the hosting provider.

Do not change the existing UPPC domain records until the new deployment has been tested and approved.

## 14. Recommended production sequence

Phase 1 — Foundation
- Supabase project
- Database
- Authentication
- Storage
- Staff roles

Phase 2 — Content
- Machines
- Publications
- Historical documents
- Photographs
- Exhibitions
- Education resources

Phase 3 — Public archive
- Search
- Filters
- Document viewer
- Metadata
- OCR
- Download permissions

Phase 4 — Museum experience
- Virtual tour
- Audio guide
- Interactive objects
- 360-degree photography

Phase 5 — Operations
- Visitor booking
- Email notifications
- Research requests
- Analytics
- Audit logs
- Backups

## 15. Before launch checklist

- [ ] All machine information verified by UPPC
- [ ] Logo and brand usage approved
- [ ] Historical photographs rights confirmed
- [ ] Archive copyright status checked
- [ ] Staff accounts created
- [ ] RLS policies tested
- [ ] Storage policies tested
- [ ] Visitor booking tested
- [ ] Mobile layout tested
- [ ] Accessibility checked
- [ ] Search tested
- [ ] Backup process documented
- [ ] Domain configured
- [ ] HTTPS confirmed
- [ ] Final UPPC approval obtained
