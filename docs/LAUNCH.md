# Launch guide

Use this guide after pushing the repository to GitHub.

## 1. GitHub repository setup

```bash
gh repo create claude-ecosystem-rated --public --source=. --remote=origin --push
```

Then in GitHub Settings → Branches:

- Add branch protection on `main`
- Require pull request before merging
- Require status checks: **validate** (CI job)

## 2. Good first contribution issues

Create these issues on GitHub (copy titles and bodies):

### Issue A: Add Sentry MCP Server

**Title:** Good first contribution: Add Sentry MCP Server  
**Labels:** `good first issue`, `add-entry`

**Body:**

```markdown
Add a rated entry for the Sentry MCP server.

- URL: https://github.com/getsentry/sentry-mcp
- Category: `mcp-server`
- See CONTRIBUTING.md for the JSON template
- Run `npm run check` before opening PR
```

### Issue B: Add Linear MCP Server

**Title:** Good first contribution: Add Linear MCP Server  
**Labels:** `good first issue`, `add-entry`

**Body:**

```markdown
Add a rated entry for a Linear MCP integration.

Search for maintained Linear MCP servers and pick one with clear docs.
Include evidence links and honest ratings (not all 5s).
```

### Issue C: Refresh stale entries

**Title:** Good first contribution: Verify and refresh MCP reference servers  
**Labels:** `good first issue`, `update-rating`

**Body:**

```markdown
Pick 2–3 entries in `data/entries/mcp-*.json`, verify docs still match reality,
update ratings if needed, set `lastVerified` to today, and open a PR.
```

## 3. Launch posts (templates)

### Hacker News (Show HN)

**Title:** Show HN: Community-rated catalog for the Claude coding ecosystem

**Body:**

```text
I built a PR-driven catalog for rating MCP servers, Agent Skills, Cursor rules,
hooks, plugins, and CLIs. Each tool is a JSON file validated by CI; README
tables are auto-generated.

Unlike automated MCP indexes, this focuses on human-verified ratings with
evidence links and a reusable JSON schema others can fork.

https://github.com/YOUR_USERNAME/claude-ecosystem-rated

Contributions welcome — one JSON file per PR.
```

### Reddit (r/ClaudeAI, r/ClaudeCode, r/cursor)

**Title:** I made an open community rating catalog for the Claude dev ecosystem (MCP, skills, hooks, rules)

**Body:**

```text
The Claude tooling space is noisy. I started claude-ecosystem-rated — a public
repo where each tool is a JSON entry with docs/maintenance/utility/trust scores,
validated by CI and ranked in the README.

Covers MCP servers, Agent Skills, Cursor rules, hooks, plugins, and CLIs.
PRs welcome; see CONTRIBUTING.md.

Link: https://github.com/YOUR_USERNAME/claude-ecosystem-rated

Complements mcprated and MCPpedia rather than replacing them.
```

### X / LinkedIn (short)

```text
New OSS project: community-verified ratings for the Claude coding ecosystem —
MCP servers, skills, hooks, rules, plugins, CLIs.

Open JSON data, PR-driven, reusable schema + CI.
Contributions welcome.

https://github.com/YOUR_USERNAME/claude-ecosystem-rated
```

## 4. Launch day checklist

- [ ] CI green on `main`
- [ ] README shows 20 entries
- [ ] 3 good-first-issue issues created
- [ ] Posts published (HN, Reddit, social)
- [ ] Pin CONTRIBUTING link in repo description
- [ ] Add topics: `claude`, `mcp`, `cursor`, `agent-skills`, `open-source`

## 5. Week one maintenance

- Respond to PRs within 24 hours
- Merge valid contributions quickly
- Add 5–10 entries based on community requests
- Update `docs/APPLICATION.md` metrics before applying to Claude for OSS
