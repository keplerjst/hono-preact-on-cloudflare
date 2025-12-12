# Hono + Preact on Cloudflare

This repository is an original boilerplate for "12 web apps in 12 months".

- Hono + Preact with SSR, hydration and routing
- TailwindCSS
- Vite
- Cloudflare Worker
- Cloudflare D1 for Database

## Cloudflare D1

```txt
npx wrangler@latest d1 create <db_name>
```

```txt
✅ Successfully created DB <db_name> in region XXX
Created your new D1 database.

{
  "d1_databases": [
    {
      "binding": "<db_name>",
      "database_name": "<db_name>",
      "database_id": "<unique-ID-for-your-database>"
    }
  ]
}
```

## Commands

```txt
pnpm install
pnpm run dev
```

```txt
pnpm run deploy
```

[For generating/synchronizing types based on your Worker configuration run](https://developers.cloudflare.com/workers/wrangler/commands/#types):

```txt
pnpm run cf-typegen
```

Pass the `CloudflareBindings` as generics when instantiation `Hono`:

```ts
// src/index.ts
const app = new Hono<{ Bindings: CloudflareBindings }>()
```
