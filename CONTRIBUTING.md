# Contributing

Thank you for helping the community choose better tools. Contributions are pull requests that add or update JSON files in `data/entries/`.

## Quick start

1. Fork this repository.
2. Run once locally (author-only commits, no AI co-author trailers):

   ```powershell
   .\scripts\setup-git.ps1
   ```

3. Create a branch: `git checkout -b add-mcp-sentry`.
4. Add or edit `data/entries/{id}.json`.
5. Run locally:
   ```bash
   npm install
   npm run check
   ```
6. Commit **both** the JSON file and the updated `README.md`.
7. Open a pull request using the template.

CI will fail if validation errors exist or if `README.md` is out of sync.

## Adding a new entry

Create `data/entries/your-slug.json`. The `id` field must match the filename.

### Example

```json
{
  "id": "mcp-sentry",
  "name": "Sentry MCP Server",
  "url": "https://github.com/getsentry/sentry-mcp",
  "repo": "https://github.com/getsentry/sentry-mcp",
  "category": "mcp-server",
  "description": "MCP integration for Sentry issues, releases, and error context.",
  "ratings": {
    "documentation": 4,
    "maintenance": 4,
    "utility": 4,
    "trust": 5
  },
  "evidence": [
    "https://github.com/getsentry/sentry-mcp#readme",
    "https://github.com/getsentry/sentry-mcp/releases"
  ],
  "compatibleClients": ["claude-code", "cursor"],
  "lastVerified": "2026-06-23",
  "submittedBy": "your-github-username"
}
```

### Field rules

| Field | Rules |
| --- | --- |
| `id` | Lowercase slug with hyphens; must match filename |
| `category` | `mcp-server`, `agent-skill`, `cursor-rule`, `hook`, `plugin`, `cli`, or `other` |
| `description` | 10–200 characters |
| `ratings` | Integers 1–5 for `documentation`, `maintenance`, `utility`, `trust` |
| `evidence` | At least one URL supporting your ratings |
| `lastVerified` | ISO date when you personally verified the tool |
| `submittedBy` | Your GitHub username |
| `maintainerDisclosure` | Set `true` if you maintain the rated tool |

Do **not** add `overall` to ratings — it is computed automatically.

## Updating ratings

Open a PR that:

1. Updates scores and `lastVerified` to today's date.
2. Adds `evidence` links (recent release, changelog, issue, or documented experience).
3. Explains what changed in the PR description.

Rating changes without evidence will be declined.

## Rating guidelines

Be honest and specific. Avoid inflating scores.

| Score | Meaning |
| ---: | --- |
| 5 | Excellent — best in class |
| 4 | Good — minor gaps |
| 3 | Adequate — usable with caveats |
| 2 | Weak — significant issues |
| 1 | Poor — avoid unless necessary |

A healthy catalog has variety — not every entry should be 5/5.

## Maintainer disclosure

If you maintain the tool you are rating, set `"maintainerDisclosure": true` in the JSON and note it in your PR. Maintainers may submit entries, but ratings should remain fair and evidence-backed.

## What we do not accept

- Spam or duplicate entries for the same tool
- Ratings without evidence
- Promotional language in descriptions
- Entries for closed-source tools without a public URL

## Questions

Open a [GitHub issue](https://github.com/claude-ecosystem-rated/claude-ecosystem-rated/issues) with the **Add entry** or **Update rating** template.
