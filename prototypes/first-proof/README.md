# First Proof — Interface Quality Lens

## Purpose

This portable static page demonstrates the central MASE claim in the experience itself: an AI-era product interface should make context, control, recovery, and evidence visible. It is a **teaching proof**, not a design-system library, live agent, lead capture page, benchmark result, or production customer workflow.

The proof uses a local-only interactive lens. Selecting a quality dimension changes visible explanatory text in the browser. The interaction does not create an account, submit a form, store state, call a network service, transmit data, or score the visitor.

## Primary reader task

A product leader or practitioner should be able to understand, in one session:

1. Why a plausible model-generated front end is not automatically a trustworthy product interface.
2. Which four qualities—context, control, recovery, and record—deserve deliberate product design.
3. How MASE turns those qualities into a small research-to-release workflow.
4. Which external standards inform the baseline.

## Acceptance criteria

| Area | Acceptance criterion |
|---|---|
| Semantics | One main landmark, clear section headings, descriptive navigation, tablist/tab/tabpanel semantics, and a skip link are present. |
| Accessibility | Focus is visible, the quality lens is keyboard-operable with native buttons, output changes are marked as polite live content, and motion is reduced for users who request it. |
| Data restraint | No form, storage API, request API, beacon, external script, analytics, account, upload, or data collection is present. |
| Responsive UX | The core layout reduces from multi-column to one column at narrow viewports without removing essential content. |
| Performance | The proof uses one static document with inline CSS and JavaScript only; no framework, font download, image, video, animation library, or network-dependent primary interaction is required. |
| Claims | The proof describes an operating method and standards basis. It makes no universal claim of being better than a named model, vendor, or person. |
| Reversibility | The proof can be removed by reverting the commit that adds `prototypes/first-proof/` and its quality script. |

## Local preview

From the repository root:

```bash
node scripts/preview-first-proof.mjs
```

Open `http://localhost:4182` in a browser. The preview server is local-only and must not be treated as a production host.

## Quality check

From the repository root:

```bash
node scripts/check-first-proof.mjs
```

The check confirms the expected semantic hooks, no-collection boundary, interactive options, motion preference, absence of common network/storage APIs, and inline script syntax. It is intentionally a lightweight static check; it is not a replacement for manual keyboard, mobile, assistive-technology, or user-comprehension testing.

## Review record

| Review | Result | Limitation |
|---|---|---|
| Source check | Pass | Static check verifies source shape, not rendered behavior across every browser. |
| Desktop visual review | Pass | Initial visual review is desktop-oriented; narrow viewport and keyboard review remain required before external promotion. |
| Data-boundary review | Pass | No collection mechanism exists in source at this stage. |
| Claims review | Pass | “Outcode” is framed as a process discipline, not a universal comparative-performance assertion. |

## Deployment and rollback

No deployment target is currently configured for this repository. If the property is published, use a static deployment that preserves the portable source and does not introduce data collection or vendor lock-in by default. Before publishing, identify the canonical public URL and release owner.

To roll back a released proof, revert its source-controlled release commit. Do not delete historical decision or verification records; preserve them as release evidence.
