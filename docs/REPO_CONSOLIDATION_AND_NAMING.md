# Repo consolidation, Nx plugin home, and Figma MCP naming

This document captures **decisions**, **checklists**, and **opposing arguments** so you can consolidate safely without surprise breakage.

---

## 1. `effinrich/forgekit` as home for `@effinrich/forgekit-nx-storybook`

**Current state (npm):** [`@effinrich/forgekit-nx-storybook`](https://www.npmjs.com/package/@effinrich/forgekit-nx-storybook) lists repository  
`https://github.com/effinrich/forgekit`.

**Intent:** Treat **`effinrich/forgekit`** as the **Nx plugin + related monorepo code** source of truth, and **archive or read-only** duplicate trees elsewhere once migration is done.

### Suggested consolidation checklist

1. **Inventory** every repo that contains a copy of the Nx plugin or overlapping generators (`forgekit-v2`, standalone `forgekit-nx-storybook` folder, etc.).
2. **Pick one** implementation path: either **only** `effinrich/forgekit` publishes `@effinrich/forgekit-nx-storybook`, or you merge into **`forgekit-v2`** and change npm to publish from there — **do not** leave two publishing pipelines for the same package name.
3. **npm:** One `npm owner` / automation token; one CI workflow that runs `nx release` or `npm publish` from the chosen repo.
4. **Deprecate** duplicate packages or repos **after** a migration note in README: “Development moved to `effinrich/forgekit`.”
5. **Update** `forgekit-landing` `apps/web/src/data/forgekitPackages.ts` if the canonical GitHub URL changes.

### Opposing view — keep Nx plugin in a **small dedicated repo**

**Pros:** Clear issues/PR scope; smaller clone; permissions per repo.  
**Cons:** You already pointed npm at `effinrich/forgekit`; splitting again **increases** drift. **Recommendation:** Unless the team is huge, **one monorepo** (`forgekit` or `forgekit-v2` renamed) is simpler than many thin repos.

### Opposing view — **forgekit-v2** should absorb everything

**Pros:** Already Nx; already has MCP packages side by side.  
**Cons:** Renames, moving npm publish scope, and contributor confusion during migration. **Recommendation:** If you merge `forgekit` **into** `forgekit-v2`, do it as a **planned** migration with one npm org story, not incremental copies.

---

## 2. Rename `chakra-figma-mcp` → `forgekit-figma-mcp` on GitHub

**Goal:** Repo name matches npm package **`forgekit-figma-mcp`** and reduces “why is Chakra in the URL?” confusion.

### Steps (GitHub)

1. Open **`https://github.com/effinrich/chakra-figma-mcp`** → **Settings** → **General** → **Repository name** → rename to **`forgekit-figma-mcp`**.
2. GitHub **automatically** redirects `chakra-figma-mcp` to the new name for browsers and `git` (for a period — do not rely on it forever).
3. Update **every** hard link: README badges, Mintlify, landing site, other repos’ READMEs, internal wikis.

### npm `package.json` (publish a patch)

In the repo that publishes **`forgekit-figma-mcp`**:

```json
"repository": {
  "type": "git",
  "url": "git+https://github.com/effinrich/forgekit-figma-mcp.git"
},
"bugs": {
  "url": "https://github.com/effinrich/forgekit-figma-mcp/issues"
},
"homepage": "https://github.com/effinrich/forgekit-figma-mcp#readme"
```

Run **`npm version patch`** (or manual bump) and **`npm publish`**.

### Opposing view — **keep** `chakra-figma-mcp` name

**Arguments:**

- **Honest scope:** If the MCP is still *primarily* Chakra-oriented, the old name signals that and avoids overpromising “all of ForgeKit.”
- **Stability:** Zero broken links, no npm publish required, no SEO dip from renamed URLs.
- **GitHub redirect:** Renames are usually smooth, but **external sites** (blogs, tweets) won’t auto-update.

**Counter:** You can document “Chakra-first, extensible to Tailwind” in the README; **`forgekit-figma-mcp`** matches npm and the rest of the ForgeKit story.

**Recommendation:** Renaming to **`forgekit-figma-mcp`** is reasonable **if** you commit to updating npm metadata the same day.

---

## 3. Removing “dupes” from other namespaces

**Rule:** Two **npm package names** must not claim to be the same product without a **deprecation** path.

- If **`forgekit-v2`** contains `packages/figma-mcp` that also publishes as `forgekit-figma-mcp`, you must **not** have a second silent publish from another repo — pick **one** release pipeline.
- After consolidation, mark old repos **Archived** on GitHub and add a one-line README pointer.

### Opposing view — **keep** experimental forks public

Useful for R&D, but **confuses** users and search. Prefer **branches** or **private forks** until ready to merge.

---

## 4. Landing site (`forgekit-landing`) after renames

Update **`apps/web/src/data/forgekitPackages.ts`** whenever:

- Canonical docs URL goes live (`docs.forgekit.cloud`).
- GitHub repo renames (`forgekit-figma-mcp`).
- `effinrich/forgekit` vs `forgekit-v2` decision is finalized.

The site should always state **integration type** explicitly (MCP vs Nx vs CLI) so packages are not mistaken for duplicates.
