# MASE Front-End Intelligence Operating Model

## The work loop

MASE is a **research-to-release loop**, not a one-time visual-design exercise. Every meaningful front-end effort begins with a named reader, a bounded user task, and an explicit risk or uncertainty. The output is a small proof that can be tested and either retained, revised, or retired.

| Stage | Required input | Required output | Quality gate |
|---|---|---|---|
| **1. Observe** | Reader, use context, task, constraint, and evidence question. | Research note or field observation. | The insight is attributable, not a vague trend assertion. |
| **2. Frame** | Observed need and public claim boundary. | Job story, primary path, state model, and failure path. | A reviewer can identify what the system will and will not do. |
| **3. Prototype** | Approved frame and source/asset rights. | Small portable interface with no hidden dependencies. | Essential path works without login, back end, or data collection unless those are expressly approved. |
| **4. Evaluate** | Prototype plus acceptance criteria. | Manual check record and automated checks proportionate to risk. | Keyboard, semantic, responsive, performance, and failure states are considered. |
| **5. Release** | Evaluation result and deployment target. | Source-controlled release, changelog entry, and rollback point. | Public claims match the implemented and verified experience. |
| **6. Learn** | Feedback, observed use, and remaining uncertainties. | Decision record and backlog update. | The next change responds to evidence, not novelty alone. |

## Front-end benchmark protocol

A useful comparison is a specific, repeatable test—not an unbounded contest between tools. When MASE evaluates model-assisted work, it must name the task, input conditions, versions/date, evaluation criteria, reviewer, and limitations. Preserve the source outputs only when licenses, confidentiality, and provider terms permit.

| Criterion | How to assess it | Passing evidence |
|---|---|---|
| **Task completion** | Give a representative user one primary outcome and observe whether they can reach it. | A short path with no unexplained step. |
| **Information hierarchy** | Ask a first-time reader to identify purpose, action, scope, and caveat. | Their summary is materially consistent with the intended message. |
| **State and uncertainty** | Trigger an interaction or unavailable condition. | The interface explains what changed, what is pending, and what the user can do next. |
| **Accessibility** | Inspect landmark/heading structure, tab order, visible focus, and control names. | The critical path is keyboard navigable and semantically intelligible. |
| **Responsiveness** | Test common taps, clicks, and keys on constrained conditions. | Timely feedback without confusing repeated input. |
| **Privacy restraint** | Inspect network calls and source behavior for the primary path. | No unexpected collection, storage, or third-party handoff. |
| **Maintainability** | Review dependencies, tokens, layout primitives, and change boundaries. | A maintainer can make a targeted change without rewriting the experience. |

## Decision hygiene

Write a dated decision record for each choice that could materially change an independent property’s meaning, public claim, data exposure, interface architecture, or deployment model. A record should state the decision, context, alternatives considered, evidence, acceptance criteria, owner, and reversal condition.

## Non-negotiable boundaries

MASE does not upload user files by default, request confidential material to make a prototype work, make consequential decisions for users, obscure model limitations, or sell a scoring result as a compliance or investment conclusion. If a future product needs a login, agent, CRM, analytics, payment, scheduling, or data connector, it becomes a separate implementation decision with data and operational review.

## Release checklist

| Check | Minimum expectation |
|---|---|
| Source | All changed content is tracked; no credentials or accidental assets are staged. |
| Semantics | One main landmark, coherent heading order, descriptive interactive labels, and visible focus. |
| Mobile | Primary user task remains legible and operable at a narrow viewport. |
| Performance | No unnecessary heavy library, autoplay media, blocking animation, or opaque third-party widget. |
| Content | Claims are specific, linked to evidence where factual, and proportionate to the tested scope. |
| Privacy | Data capture and external requests are absent or intentionally declared. |
| Rollback | Prior commit or version is identified before publication. |
| Record | Release note names the change, verification result, limitation, and owner. |

## Maintenance cadence

Review active prototypes monthly for broken links, dependency changes, stale claims, browser changes, and data-boundary drift. Review the research backlog quarterly to retire obsolete trend claims, make unresolved questions visible, and prioritize an evidence-bearing next proof. Immediate review is required if a security concern, sensitive-data exposure, misleading public claim, or critical accessibility defect is discovered.
