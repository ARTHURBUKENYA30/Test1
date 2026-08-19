# UPPC Digital Museum Platform v4

## What was continued

- Added `/admin` staff workspace route.
- Added museum administration dashboard UI.
- Added collection record search and draft-record creation.
- Added local browser persistence for collection records in the prototype.
- Added visitor/tour request management with approve/complete actions.
- Added JSON export of current prototype data.
- Added reserved modules for Archive, Exhibitions, Education, Media, Reports and Settings.
- Added a Staff Portal link in the public museum footer.
- Removed the old Vite starter max-width styling so the museum can use the full viewport.
- Kept the UPPC logo asset and supplied museum images in `public/images/`.

## Official UPPC grounding

The museum content direction is based on UPPC's public information: UPPC traces its printing history to the Government Printer in 1902; UPPC describes the Print Museum as a heritage and education initiative; and UPPC has announced plans for an online archival centre with historical records and publications dating back to 1902.

Official source: https://www.uppc.go.ug/

## Important production step

The `/admin` area is a front-end prototype only. Before deployment it should be connected to:

1. Secure staff authentication and role-based permissions.
2. A server-side database for collection, archive, exhibition, education and visit records.
3. Object/document storage for high-resolution images, scans, audio and video.
4. Audit logs and approval workflow before publishing archive records.
5. Search indexing for the historical archive.
6. Backup, retention and disaster-recovery policies.
7. Rights/licensing metadata for digitised materials.

## Build note

The source package is complete, but the current execution environment did not have the required Vite/Node type packages available locally, so a production `npm run build` could not be completed in this environment. Run `npm install` followed by `npm run build` on a normal Node.js development environment.
