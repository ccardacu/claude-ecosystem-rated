# Claude Ecosystem Rated

Community-verified ratings for the Claude coding ecosystem — open data, PR-driven, reusable schema.

Pick MCP servers, Agent Skills, Cursor rules, hooks, plugins, and CLIs with confidence. Every entry is a JSON file reviewed via pull request, validated by CI, and ranked in this README.

**[Contribute a rating →](CONTRIBUTING.md)**

## Why this exists

The Claude coding ecosystem is growing fast: MCP servers, skills, hooks, rules, and plugins appear daily. Automated indexes help, but developers still need **human-verified signals** that are **transparent**, **forkable**, and **easy to contribute to**.

This repo complements projects like [mcprated](https://github.com/mcprated/mcprated), [MCPpedia](https://mcppedia.org), and [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) by covering the **full Claude dev stack** with **PR-verified community ratings**.

## Quick stats

<!-- STATS:START -->
- **Total entries:** 21
- **Categories:** 6
- **Last verified entry:** 2026-06-23
- **Generated:** 2026-06-23
<!-- STATS:END -->

## Rating scale

Each entry scores four axes from **1** (poor) to **5** (excellent):

| Axis | Question |
| --- | --- |
| **Documentation** | Can a stranger install and use it from the docs? |
| **Maintenance** | Is it actively maintained and recently updated? |
| **Utility** | Does it solve a real problem in daily workflows? |
| **Trust** | Is it safe and credible to depend on? |

**Overall** is the rounded average of the four axes (computed automatically, not hand-edited).

Entries not verified in the last **90 days** are marked **stale** in the tables below.

## Rated catalog

<!-- RATINGS:START -->
### MCP Servers

| Name | Overall | Docs | Maint. | Utility | Trust | Clients | Verified |
| --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | 5 ★★★★★ | 5 | 5 | 5 | 5 | claude-code, cursor, claude-desktop, windsurf | 2026-06-23 |
| [Sentry MCP Server](https://github.com/getsentry/sentry-mcp) | 5 ★★★★★ | 5 | 5 | 5 | 5 | claude-code, cursor, windsurf | 2026-06-23 |
| [Playwright MCP Server](https://github.com/microsoft/playwright-mcp) | 4.8 ★★★★½ | 4 | 5 | 5 | 5 | claude-code, cursor, claude-desktop, windsurf | 2026-06-23 |
| [Context7 MCP](https://github.com/upstash/context7) | 4.3 ★★★★☆ | 4 | 4 | 5 | 4 | claude-code, cursor, windsurf | 2026-06-23 |
| [Filesystem MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) | 4.3 ★★★★☆ | 4 | 4 | 5 | 4 | claude-code, cursor, claude-desktop, windsurf | 2026-06-23 |
| [PostgreSQL MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/postgres) | 4 ★★★★☆ | 4 | 4 | 4 | 4 | claude-code, cursor, claude-desktop, windsurf | 2026-06-23 |
| [Fetch MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) | 3.8 ★★★½☆ | 4 | 4 | 4 | 3 | claude-code, cursor, claude-desktop, windsurf | 2026-06-23 |
| [Brave Search MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search) | 3.5 ★★★½☆ | 3 | 3 | 4 | 4 | claude-code, cursor, claude-desktop, windsurf | 2026-06-23 |
| [Memory MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/memory) | 3.3 ★★★☆☆ | 3 | 3 | 4 | 3 | claude-code, cursor, claude-desktop, windsurf | 2026-06-23 |

### Agent Skills

| Name | Overall | Docs | Maint. | Utility | Trust | Clients | Verified |
| --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| [Create Rule (Cursor)](https://github.com/cursor/skills-cursor/tree/main/create-rule) | 4.8 ★★★★½ | 5 | 4 | 5 | 5 | cursor | 2026-06-23 |
| [Create Skill (Cursor)](https://github.com/cursor/skills-cursor/tree/main/create-skill) | 4.8 ★★★★½ | 5 | 4 | 5 | 5 | cursor, claude-code | 2026-06-23 |
| [Figma Implement Design](https://github.com/anthropics/skills/tree/main/skills/figma-implement-design) | 4.5 ★★★★½ | 4 | 4 | 5 | 5 | claude-code, cursor | 2026-06-23 |
| [Create Hook (Cursor)](https://github.com/cursor/skills-cursor/tree/main/create-hook) | 4.3 ★★★★☆ | 4 | 4 | 4 | 5 | cursor | 2026-06-23 |

### Cursor Rules

| Name | Overall | Docs | Maint. | Utility | Trust | Clients | Verified |
| --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| [Frontend A11y Rules (Cursor Directory)](https://cursor.directory/rules/accessibility) | 3.8 ★★★½☆ | 4 | 3 | 4 | 4 | cursor | 2026-06-23 |
| [Awesome Cursor Rules](https://github.com/PatrickJS/awesome-cursorrules) | 3.5 ★★★½☆ | 3 | 3 | 5 | 3 | cursor | 2026-06-23 |

### Hooks

| Name | Overall | Docs | Maint. | Utility | Trust | Clients | Verified |
| --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| [Conventional Commits Hook Pattern](https://docs.cursor.com/en/agent/hooks) | 4.3 ★★★★☆ | 4 | 4 | 4 | 5 | cursor | 2026-06-23 |
| [Format on Save Hook Pattern](https://docs.cursor.com/en/agent/hooks) | 4.3 ★★★★☆ | 4 | 4 | 4 | 5 | cursor | 2026-06-23 |

### Plugins

| Name | Overall | Docs | Maint. | Utility | Trust | Clients | Verified |
| --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| [Claude Code Plugins](https://docs.anthropic.com/en/docs/claude-code/plugins) | 4.8 ★★★★½ | 4 | 5 | 5 | 5 | claude-code | 2026-06-23 |
| [Cursor Marketplace](https://cursor.com/marketplace) | 4 ★★★★☆ | 3 | 4 | 4 | 5 | cursor | 2026-06-23 |

### CLI Tools

| Name | Overall | Docs | Maint. | Utility | Trust | Clients | Verified |
| --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| [Claude Code CLI](https://docs.anthropic.com/en/docs/claude-code) | 5 ★★★★★ | 5 | 5 | 5 | 5 | claude-code | 2026-06-23 |
| [Cursor Agent CLI](https://docs.cursor.com/en/cli/overview) | 4.3 ★★★★☆ | 4 | 4 | 4 | 5 | cursor | 2026-06-23 |

<!-- RATINGS:END -->

## Reusable schema

Fork this repository structure for your own community ratings:

1. Copy `schema/entry.schema.json` and `scripts/`.
2. Add entries under `data/entries/{id}.json`.
3. Run `npm run check` locally or reuse `.github/workflows/ci.yml`.

See [docs/SCHEMA.md](docs/SCHEMA.md) for field definitions and validation rules.

## Related projects

| Project | Focus |
| --- | --- |
| [mcprated](https://github.com/mcprated/mcprated) | Agent-readable MCP quality index with automated linting |
| [MCPpedia](https://mcppedia.org) | Large MCP encyclopedia with automated scoring |
| [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | Broad MCP directory (85k+ stars) |
| [Anthropic Skills](https://github.com/anthropics/skills) | Official Claude Agent Skills |

## License

MIT — see [LICENSE](LICENSE). By contributing, you agree to the [Code of Conduct](CODE_OF_CONDUCT.md).
