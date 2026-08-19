# UPPC Digital Museum — V5

## What changed
- Added a reusable museum content store in `src/lib/museumStore.ts`.
- Expanded the admin workspace into working local CRUD for:
  - Collections / machines
  - Archive records
  - Exhibitions
  - Visitor requests
- Added search to collections and archive.
- Added JSON export for all museum data.
- Added richer catalogue metadata: accession number, location, tags, description and update date.
- Retained supplied museum photography and UPPC logo under `public/images/`.

## Production architecture to implement next
The current browser store is intentionally a prototype. Replace it with:
- PostgreSQL (museum records, metadata, users, bookings, audit events)
- Object storage (photographs, PDFs, audio, video, 3D/360 assets)
- OCR pipeline for scanned historical publications
- Full-text search (PostgreSQL FTS or OpenSearch)
- Role-based authentication (Curator, Archivist, Education, Communications, Administrator)
- Audit log for every publication/edit/delete action
- Moderation workflow: Draft → Review → Published → Archived
- Public API for collection/archive pages
- Signed URLs for protected source files where required
- Backups and preservation checksums for archival masters

## Curatorial rule
Machine names, dates, provenance, accession numbers and historical claims must be verified by UPPC museum/archives staff before public publication.
