# MASE

> **MASE is a front-end intelligence and execution practice for AI-era products.**

This repository is the source-controlled home for research, benchmarks, prototypes, interface standards, and release records that help teams build front ends that are **more useful, legible, accessible, and accountable** than default model-generated output.

MASE does not promise to be “better” than any named model in every task. It competes through a disciplined operating system: understand the user and decision context, make the interface state visible, test the critical path, measure the outcome, and preserve a reversible record of what changed.

## Why this exists

Modern coding models can generate a competent first interface quickly. The gap is rarely raw markup. It is the work around the markup: choosing the right problem, turning uncertain workflows into clear interaction states, protecting user control, meeting accessibility and performance requirements, and learning after release.

> **The goal is not to make interfaces look artificially intelligent. The goal is to make people more capable, more informed, and more in control when software becomes more capable.**

## MASE operating system

| Layer | What MASE produces | Definition of quality |
|---|---|---|
| **Observe** | Research notes, user evidence, risk and context map. | The problem is specific, attributable, and safe to explore. |
| **Frame** | User promise, task flow, state model, claims boundary. | The interface does not conceal uncertainty, authority, or data handling. |
| **Prototype** | Small, reversible proof of a critical interaction. | The user can complete the essential task without unnecessary account creation, data sharing, or cognitive load. |
| **Evaluate** | Accessibility, responsiveness, comprehension, and failure-path checks. | Evidence shows the design is understandable and usable by more than the happy path. |
| **Release** | Source-controlled implementation and release record. | The change is reversible, dependencies are known, and the public claim matches the evidence. |
| **Learn** | Field notes, decision records, and an updated benchmark. | The next iteration follows observed use, not fashion or benchmark theater. |

## Repository map

| Path | Purpose |
|---|---|
| `docs/CHARTER.md` | Property role, audience, claims boundary, and decision rights. |
| `docs/OPERATING_MODEL.md` | Repeatable research-to-release workflow and quality gates. |
| `docs/research/` | Source-backed research notes and design implications. |
| `docs/decisions/` | Small, dated records of meaningful product or technical choices. |
| `prototypes/first-proof/` | The first self-contained MASE experience proof. |
| `scripts/` | Local, inspectable quality checks with no credentials or hidden service dependency. |
| `.github/workflows/` | Basic repository quality automation. |

## Initial acceptance criteria

The first proof must be static, portable, and understandable without an account or backend. It must have semantic landmarks, keyboard-visible focus, a low-dependency implementation, a no-submit/no-data-collection boundary, and a documented rollback path. It must not claim measured superiority over a person, model, vendor, or competitor until that claim has a disclosed, reproducible evaluation basis.

## Contribution and publication rules

Use a branch and a descriptive commit for material changes. Keep research citations with the claim they support. Do not put credentials, client material, personal data, or unapproved third-party assets in the repository. Do not publish an interactive agent, lead form, telemetry, or file upload without a documented data classification, owner, retention approach, and rollback path.

The source is public for inspection, reuse, and review. The code and documentation are deliberately portable so they can be released without a platform rewrite. Treat GitHub Pages as a public showcase only; do not add sensitive material, client material, credentials, or user-data collection without a new review.

## Current status

**Stage:** Foundation and first-proof preparation.

**Owner:** Mason Nguyen / virtualmase.

**Repository:** [github.com/virtualmase/mase](https://github.com/virtualmase/mase).

**Skill directory:** [virtualmase.github.io/mase](https://virtualmase.github.io/mase/).

**Related public surface:** [virtualmase MASE prototype](https://virtualmase.vercel.app/mase.html).
