# UPPC Digital Museum V6

V6 is the backend-foundation release. It keeps the polished public museum and admin prototype, adds Supabase client configuration, a production database migration, storage policies, staff-role security, and a complete deployment/setup guide.

The current admin UI still uses local demo storage. The next implementation step is to replace those localStorage CRUD operations with Supabase queries and Supabase Auth, then add real file upload components for museum-public and museum-private storage.
