# UPPC DIGITAL MUSEUM — FINAL PRODUCTION SETUP

This is the final packaged web application for the UPPC Digital Museum and Heritage Archive.

## 1. Requirements

- Windows/macOS/Linux
- Node.js 20.19+ (or a current supported LTS)
- A Supabase project
- A modern browser
- VS Code recommended

## 2. Install

Open a terminal in this `app` folder:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, normally `http://localhost:5173`.

## 3. Configure Supabase

1. Create a project at https://supabase.com/
2. Open **SQL Editor**.
3. Copy the complete contents of:
   `supabase/migrations/001_uppc_museum.sql`
4. Run it once.
5. In **Project Settings → API**, copy:
   - Project URL
   - Publishable/anon key
6. Copy `.env.example` to `.env.local`.
7. Fill in:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
```

Never put the Supabase `service_role`/secret key into the website.

## 4. Create the first museum administrator

In Supabase:

1. Go to **Authentication → Users**.
2. Create the staff user's email and a strong password.
3. Copy the user's UUID.
4. Run:

```sql
insert into public.profiles (id, full_name, role)
values ('USER_UUID_HERE', 'UPPC Museum Administrator', 'admin')
on conflict (id) do update
set full_name = excluded.full_name, role = 'admin';
```

The staff portal is:

`/admin`

When Supabase is configured, the portal requires authentication and the user's profile role.

## 5. Staff roles

The database supports:

- `admin` — full museum administration
- `curator` — collections and exhibitions
- `editor` — public editorial content
- `staff` — operational museum work

Keep the number of administrators small.

## 6. Storage

The SQL migration creates:

- `museum-public` — public-approved images/derivatives
- `museum-private` — restricted archive masters

Recommended preservation workflow:

Original master → private storage → curatorial review → approved derivative → public storage.

Do not publish a scan until rights/access status is cleared.

## 7. Using the supplied UPPC museum images

The project contains the supplied images in:

`public/images/`

and the supplied UPPC logo at:

`public/images/uppc-logo.svg`

You can use the existing images immediately. For production, upload approved high-resolution derivatives to the `museum-public` bucket and preserve originals in `museum-private` or an institutional preservation system.

## 8. Museum records

The admin portal supports:

- Collections / machines
- Digital archive records
- Exhibitions
- Visit requests
- Publishing workflow
- Public/private uploads
- JSON export

Create records as Draft, review the information, then Publish.

## 9. Public visitor requests

The Visit section submits directly to `visit_requests` when Supabase is configured. Staff can approve and complete requests in `/admin`.

If Supabase is not configured, the site stays in safe demo mode and does not pretend that requests were stored remotely.

## 10. Build for production

```bash
npm run build
```

Then deploy the generated `dist/` directory to your chosen static host.

Set these production environment variables on the host:

```env
VITE_SUPABASE_URL=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
```

## 11. Recommended domain

Use an official UPPC-controlled subdomain such as:

`museum.uppc.go.ug`

The DNS and domain configuration should be completed by the organisation's IT/domain administrator.

## 12. Before public launch — mandatory museum verification

The website includes prototype/curatorial content to demonstrate the system. UPPC museum staff must verify:

- machine names and models
- dates and manufacturers
- provenance/acquisition information
- exact descriptions
- historical claims
- exhibition narratives
- archive dates
- copyright/permissions
- opening hours/admission information
- official telephone numbers and email addresses
- photographs and captions

Do not treat unverified prototype descriptions as authoritative museum records.

## 13. Preservation recommendations

For the real archive, maintain:

- original high-resolution masters
- derivative web copies
- stable accession IDs
- descriptive metadata
- creator/publisher
- date
- rights/access statement
- checksum/hash for preservation masters
- regular backups
- an export of database metadata
- an off-site backup

The database is a catalogue; it should not be the only preservation copy.

## 14. Final production architecture

Public Museum
→ Supabase REST API
→ PostgreSQL
→ Storage
→ Auth/RLS
→ Staff Admin

The public website reads only Published museum content. Staff operations require authenticated users whose profile is assigned an approved role.

## 15. Quick launch checklist

- [ ] Install Node.js
- [ ] Run `npm install`
- [ ] Run Supabase migration
- [ ] Create first staff user
- [ ] Add administrator profile
- [ ] Configure `.env.local`
- [ ] Run `npm run dev`
- [ ] Test `/`
- [ ] Test `/admin`
- [ ] Create one collection record
- [ ] Upload one approved image
- [ ] Publish the record
- [ ] Submit a visitor request
- [ ] Approve the request in admin
- [ ] Test archive upload
- [ ] Run `npm run build`
- [ ] Deploy `dist`
- [ ] Add production environment variables
- [ ] Verify all museum content with UPPC
- [ ] Configure domain/DNS
- [ ] Establish backups and preservation policy
