# Deploy Storybook MCP docs to `docs.forgekit.cloud` (Mintlify)

This guide wires the **existing Mintlify site** in [`effinrich/storybook-mcp`](https://github.com/effinrich/storybook-mcp) (root `docs.json`, `docs/` MDX) to a **custom subdomain** on your ForgeKit domain.

**Target:** `https://docs.forgekit.cloud` → Mintlify-hosted docs for **forgekit-storybook-mcp** only.

---

## Prerequisites

- DNS control for **`forgekit.cloud`** (wherever it is registered: Vercel, Cloudflare, etc.).
- Access to the **Mintlify dashboard** for the project connected to the `storybook-mcp` repo (or ability to create a new Mintlify project from that repo).
- GitHub admin on **`effinrich/storybook-mcp`** (Mintlify needs read access via GitHub App).

---

## Step 1 — Confirm the docs build locally

In the `storybook-mcp` repo:

```bash
npm install
npm run docs:dev
```

Open the local preview Mintlify gives you. Fix any broken links or `docs.json` errors before connecting a custom domain.

---

## Step 2 — Create or open the Mintlify project

1. Go to [Mintlify dashboard](https://dashboard.mintlify.com) (or your team’s Mintlify account).
2. **If the project already exists:** open it and confirm it tracks **`effinrich/storybook-mcp`** and the **production branch** (usually `main`).
3. **If you need a new project:** “Add project” → connect **GitHub** → select **`effinrich/storybook-mcp`**. Mintlify will use `docs.json` at the repo root.

---

## Step 3 — Add the custom domain in Mintlify

1. In the Mintlify project: **Settings** (or **Domains** / **Hosting** — exact label varies).
2. **Add custom domain:** `docs.forgekit.cloud`.
3. Mintlify will show a **DNS record** to create (typically a **CNAME** target such as `cname.mintlify.com` or a value they assign — **copy it exactly** from their UI; do not guess from this doc).

Leave the domain “pending” until DNS propagates.

---

## Step 4 — Create DNS records at `forgekit.cloud`

At your DNS host (Vercel Domains, Cloudflare, etc.):

1. Add a **CNAME** (or follow Mintlify’s instructions if they require **A/ALIAS** for apex — for a **subdomain** `docs`, CNAME is standard):
   - **Name / host:** `docs`
   - **Target / value:** *(exact hostname Mintlify provided)*
   - **TTL:** default or 300s while testing

2. **Do not** point `docs.forgekit.cloud` at Vercel unless you intentionally want to **self-host** the static export instead of Mintlify — this guide assumes **Mintlify hosts** the docs.

3. Wait for propagation (minutes to hours). Use `dig docs.forgekit.cloud` or an online DNS checker.

---

## Step 5 — Verify HTTPS in Mintlify

When DNS is correct, Mintlify should issue **TLS** for `docs.forgekit.cloud`. In the dashboard, confirm the domain shows **Active** / **Verified**.

Open `https://docs.forgekit.cloud` in a private window and click through a few pages.

---

## Step 6 — Align `docs.json` with the public URL (optional but nice)

In `storybook-mcp`, if Mintlify supports a **canonical URL** or **base path** setting, set it to `https://docs.forgekit.cloud` so Open Graph / sitemap match production.

Update any hardcoded “local only” links in MDX if you had them.

---

## Step 7 — Point the ForgeKit landing site at the new docs URL

In **`forgekit-landing`**, the file `apps/web/src/data/forgekitPackages.ts` should use:

- `docsUrl: 'https://docs.forgekit.cloud'`
- `docsLabel: 'Documentation'` (or similar)

for **forgekit-storybook-mcp** only.

Commit and deploy the landing app so **Packages** and CTAs link to the live docs site.

---

## Step 8 — npm `homepage` (optional)

In **`storybook-mcp` `package.json`**, you can set:

```json
"homepage": "https://docs.forgekit.cloud"
```

Publish a patch release when ready so npm’s package page links to the doc site instead of only GitHub.

---

## Troubleshooting

| Issue | What to check |
|--------|----------------|
| **DNS not verifying** | CNAME name is `docs` (not `docs.forgekit.cloud` at some providers), target matches Mintlify exactly, no conflicting A record on `docs`. |
| **SSL pending forever** | Propagation; remove duplicate records; ensure only Mintlify’s flow is used for this host. |
| **Wrong site loads** | Another service still attached to `docs` subdomain — remove old records or disconnect old project. |
| **404 on Mintlify** | Wrong branch, missing `docs.json`, or build failure — check Mintlify **Deployments** logs. |

---

## Opposing view (when *not* to use a separate docs subdomain)

- **Single domain simplicity:** Ship docs under `forgekit.cloud/docs` as part of the Vercel app (MDX in `forgekit-landing`). **Tradeoff:** duplicate content pipeline vs Mintlify, or iframe/embed hacks — usually worse than Mintlify for large doc sets.
- **Cost / accounts:** Mintlify is another bill and dashboard; **tradeoff:** you already invested in Mintlify content in `storybook-mcp`, so moving *off* Mintlify is usually more work than connecting the domain.

**Recommendation:** Keep Mintlify as the doc renderer; use **`docs.forgekit.cloud`** as the public URL for clarity and SEO.
