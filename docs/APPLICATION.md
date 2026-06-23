# Claude for Open Source — Application Draft

Use this text for the **Ecosystem Impact Track** at [claude.com/contact-sales/claude-for-oss](https://claude.com/contact-sales/claude-for-oss). Adapt metrics before submitting.

---

## Project

**Repository:** https://github.com/YOUR_USERNAME/claude-ecosystem-rated  
**Role:** Primary maintainer  
**License:** MIT

## Ecosystem impact statement (~500 words)

The Claude coding ecosystem has exploded: MCP servers, Agent Skills, Cursor rules, hooks, plugins, and CLIs ship weekly. Developers waste hours evaluating tools because quality signals are fragmented—automated MCP indexes cover servers well, but the broader Claude dev stack lacks an open, auditable, community-driven rating layer.

I maintain **claude-ecosystem-rated**, a public catalog where every tool is a JSON file under `data/entries/`, validated by CI, and ranked in the README. Ratings are not opaque scores—they are pull requests with evidence links, maintainer disclosure, and four explicit axes: documentation, maintenance, utility, and trust. Overall scores are computed automatically so contributors cannot hand-tune headline numbers.

**Why this matters**

1. **Coverage** — Unlike MCP-only indexes, we rate MCP servers, Agent Skills, Cursor rules, hooks, plugins, and CLIs in one place.
2. **Transparency** — All data lives in git. Anyone can fork the schema (`schema/entry.schema.json`) and reuse our validation scripts and GitHub Actions workflow for their own community catalogs.
3. **Low contribution friction** — Adding a tool is one JSON file and a PR. CI validates the schema, regenerates ranking tables, and blocks merges when README is stale.
4. **Complement, not compete** — We link to mcprated, MCPpedia, and awesome-mcp-servers as complementary resources. Our niche is human-verified, PR-driven ratings across the full Claude coding workflow.

**Maintenance and activity**

I am the primary maintainer with merge access. The repository includes:

- JSON Schema contract and AJV validation (`scripts/validate.mjs`)
- README auto-generation (`scripts/generate-readme.mjs`)
- GitHub Actions CI on every PR and push to `main`
- Contributor templates, Code of Conduct, and schema documentation for third-party forks

I commit regularly: seeding curated entries, responding to PRs, and keeping `lastVerified` dates current. Stale entries (>90 days) are flagged in the README to encourage ongoing community verification.

**Downstream impact**

Developers use this catalog to shortlist tools before installing MCP servers or adopting skills. Maintainers benefit from fair, evidence-backed visibility. Other communities can fork the infrastructure to run rating catalogs for their own domains without rebuilding validation from scratch.

**Request**

I am applying under the Ecosystem Impact track. While the project is new, it provides reusable open infrastructure and a growing community catalog specifically aligned with the Claude developer ecosystem. Free Claude Max would directly support maintaining CI, reviewing contributor PRs, and expanding coverage as the ecosystem evolves.

---

## Checklist before submit

- [ ] Replace `YOUR_USERNAME` with your GitHub username
- [ ] Update star count, entry count, and contributor count
- [ ] Confirm commits in the last 3 months
- [ ] Link to your GitHub profile as primary maintainer
- [ ] Apply before **June 30, 2026**

## Form fields (quick reference)

| Field | Value |
| --- | --- |
| GitHub username | Your handle |
| Email | Where activation link will arrive |
| Repository URL | Full GitHub URL |
| Role | Primary maintainer |
| Stars / downloads | Current metrics |
| Ecosystem narrative | Paste adapted text above |
