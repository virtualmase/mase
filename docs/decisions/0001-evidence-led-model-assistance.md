# Decision 0001 — Use model assistance inside an evidence-led front-end quality loop

**Date:** 2026-08-27

**Status:** Accepted

**Owner:** MASE property owner

**Decision type:** Product and public-claims boundary

## Context

MASE exists to move beyond front ends that are merely plausible because they were generated quickly. The user goal includes outperforming common model-assisted default workflows, including those associated with Claude, Codex, and Gemini. A broad public claim that MASE is categorically “better” than any named tool would be untestable without a detailed, reproducible benchmark and could confuse a product method with a vendor comparison.

## Decision

MASE will use model assistance as an implementation accelerator but will position its differentiator as the **quality loop around the generated source**: task framing, state and authority design, accessibility, interaction responsiveness, data restraint, failure-path review, source control, and post-release learning.

Public model-specific comparisons are permitted only when each comparison includes the task, prompt/input context, model/provider and version where available, evaluation date, rubric, reviewers, source outputs where rights permit, conditions, limitations, and reproducible verification notes. A narrow test result must not become a universal performance claim.

## Alternatives considered

| Alternative | Why not selected |
|---|---|
| Claim to outcode named models as a universal headline. | Too broad, difficult to substantiate, and would age poorly as model capabilities change. |
| Avoid model assistance and position MASE as entirely manual craft. | Rejects useful acceleration and does not reflect the AI-era environment MASE is designed to navigate. |
| Focus only on visual style trends. | Does not establish durable user value, interaction quality, or a defensible benchmark method. |
| Build the process around context, control, recovery, record, and release evidence. | Selected because it can be demonstrated, inspected, adapted, and improved independently of a single model. |

## Consequences

The first proof is framed as a local, evidence-led experience. It includes no comparative scorecard, no external model output, no sensitive user input, and no claim of universal superiority. Future benchmark work must follow the protocol in `docs/OPERATING_MODEL.md` and cite source material in `docs/research/`.

## Reversal condition

Revise this decision if MASE establishes a maintained benchmark program with sufficient scope, reproducibility, legal review, and evidence to make narrower comparative claims responsibly.
