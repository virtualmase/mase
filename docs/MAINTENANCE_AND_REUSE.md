# MASE Skill Maintenance and Reuse

## Release record

| Field | Verified state |
|---|---|
| Repository | [virtualmase/mase](https://github.com/virtualmase/mase) |
| Source visibility | Public by owner request for inspection, sharing, and reuse. |
| GitHub Pages directory | [virtualmase.github.io/mase](https://virtualmase.github.io/mase/) |
| First Pages deployment | GitHub Actions workflow run `33107674978`, completed successfully on August 27, 2026. |
| Public entry | `site/index.html` is published at the Pages root. |
| Public proof | `prototypes/first-proof/` is published under the Pages `/proof/` path. |
| Core package | `skills/mase-skill/SKILL.md` with one quality-baseline reference and one experience-brief template. |
| Initial release commits | `786eb15` foundation; `4f1512d` skill/directory/proof; `a7d8a3d` repository-home link and Pages trigger. |

## Maintenance cadence

| Cadence | Review | Owner action |
|---|---|---|
| Before any public release | Validate the skill, static proof, skill directory, content claims, links, and deployment diff. | Run the two Node quality checks, skill validator, and a manual browser review. |
| Monthly | Check Pages availability, outbound standards links, source/repository links, and public claim drift. | Record issues and commit only approved corrections. |
| Quarterly | Review current standards, browser/device behavior, model-interface changes, and the benchmark protocol. | Update sources and retire claims that are no longer supported. |
| On a material issue | Triage accessibility failures, misleading claims, availability faults, data-boundary changes, or dependency vulnerabilities. | Contain first; publish a reversible correction; keep a decision/release record. |

## Reuse conditions

MASE is intended to be inspectable and adaptable. Reuse should retain the distinction between an operating method and a claim of universal comparative superiority. If another team adopts the skill, they should set their own reader, task, data boundary, dependencies, reviewer, deployment owner, and rollback point; an interface proof does not transfer those obligations.

Do not put client content, credentials, sensitive personal data, proprietary model outputs without authorization, or data-bearing integrations into the public repository. Do not market a MASE assessment as formal legal, security, accessibility, or financial certification without an appropriate qualified review.

## Ethical distribution

Use the Pages directory as a reference surface when a conversation, article, presentation, or project has a clear relationship to AI-era front-end quality. Share the first proof as a working example of local-only, user-controlled interaction—not as a conversion funnel. Do not automate unsolicited outreach, manufacture model comparisons, seek inauthentic mentions, or imply a client relationship or measured result that does not exist.

## Retirement and rollback

The GitHub Pages release is generated from `main` through `.github/workflows/pages.yml`. To correct a public deployment, make a new source-controlled commit and let the workflow deploy it; if urgent, revert the release commit and push the revert. Preserve decision and release records even when a proof is removed, unless a legitimate retention or privacy obligation requires restricted handling.
