---
name: mase-skill
description: Design, audit, prototype, benchmark, and improve AI-era web front ends with explicit context, human control, recovery states, evidence, accessibility, performance, and data-restraint checks. Use for a new or existing website, app, agent interface, dashboard, conversion flow, or model-assisted front-end build when the goal is a trustworthy, future-resilient UX/UI/CX rather than a merely plausible first draft.
---

# MASE Skill

## Purpose

Use MASE to turn a vague front-end request or model-generated first draft into a bounded, evidence-led product experience. Keep the reader’s task, system state, human authority, failure path, accessibility, and data boundary visible. Treat generated UI as a hypothesis to test, not an outcome to defend.

Read `references/quality-baseline.md` when making standards, accessibility, performance, human-AI, or discovery claims. Copy `templates/experience-brief.md` when beginning a material interface change.

## When to use

Use this skill when a request involves one or more of the following:

- Designing or remastering a product, service, agent, dashboard, or conversion experience.
- Reviewing a generated front end for UX, UI, content, accessibility, performance, privacy, or maintainability gaps.
- Creating a small interactive proof before committing to a product platform.
- Benchmarking model-assisted UI work against explicit, reproducible criteria.
- Designing an AI-enabled interface that must expose context, authority, uncertainty, review, data use, or escalation.
- Preparing a high-trust public surface where generic “AI” visual treatment would undermine clarity.

Do not use this skill as a substitute for legal, security, clinical, financial, accessibility-certification, or user-research expertise. Escalate when a live system will handle sensitive, regulated, or consequential decisions.

## Operating loop

### 1. Frame the moment

Name one primary reader, one job, the meaningful decision or action, the current state, and the most plausible failure or uncertainty. State what the interface will not decide, collect, or claim. Use the experience brief template for a material change.

Do not begin with an aesthetic, framework, or model prompt when the user task and authority boundary are unclear.

### 2. Design the base layer

Build the smallest portable experience that proves the essential path. Use semantic HTML, logical heading order, native controls where possible, visible keyboard focus, readable text, responsive layouts, and a reduced-motion path. Keep the primary task usable without an account, telemetry, a model call, or opaque third-party code unless each is explicitly approved.

For AI-enabled work, make the following legible at the point of use:

| Interface concern | Show the user |
|---|---|
| Context | Relevant source, scope, freshness, and known missing information. |
| Control | What action is authorized, which choices remain human, and how to revise or stop. |
| Recovery | What happened when output, access, or context is unavailable and what can happen next. |
| Record | What informed a consequential result, who reviewed it, what changed, and when it expires. |

### 3. Treat model output as a hypothesis

Use models to accelerate variations and implementation, but preserve the prompt, constraints, intended reader, and required acceptance criteria. Ask the model to surface assumptions, ambiguity, and failure states rather than only producing the happy path.

Never claim that MASE or a model is universally better than a named competitor. A comparison must state the task, input conditions, model/provider and version where available, date, rubric, reviewer, results, limitations, and reproducibility notes.

### 4. Evaluate the hard path

Test the critical path before publishing. At minimum, check:

| Dimension | Question |
|---|---|
| Task clarity | Can a new reader identify the purpose and next action? |
| State legibility | Can the user tell what changed, is pending, is unknown, or needs review? |
| Human authority | Can the user distinguish assistance from a consequential decision or action? |
| Keyboard and semantics | Can the essential path be reached and operated without a pointer? |
| Responsiveness | Does the interface acknowledge each important action promptly and avoid unnecessary runtime work? |
| Data boundary | Are collection, storage, external requests, and third parties absent or explicitly declared? |
| Failure path | Does an unavailable, uncertain, or incomplete state present a safe next step? |
| Maintainability | Can a maintainer inspect, update, and reverse the change without hidden coupling? |

Run static checks proportionate to the implementation. Use manual browser and mobile review for visual and interaction work. Treat automated checks as a floor, not proof of usability.

### 5. Release with evidence

Commit source, validation notes, relevant sources, dependencies, acceptance results, known limitations, deployment owner, and rollback point. Keep public copy proportional to verified evidence. Preserve the previous revision so a material change can be reverted without rewriting history.

## Default outputs

Produce the smallest set that makes the work reviewable:

1. A one-page experience brief or decision record.
2. A portable prototype or targeted front-end change.
3. A short acceptance/validation record.
4. A source and dependency note.
5. A release and rollback note for public changes.

## Boundaries

Do not add uploads, forms, accounts, analytics, cookies, a chatbot, an external model call, or an agent action merely to make an interface seem advanced. Before adding any of them, document data classification, user permission, retention, vendor role, error path, human escalation, and rollback.

Do not hide uncertainty with animation, empty confidence language, or artificial progress. Do not use manipulative conversion patterns. Do not copy another product’s branded design or source assets without permission.

## Reuse

The MASE method is portable across static sites, web applications, agent interfaces, and internal tools. Adapt the degree of control to the risk of the task. Increase review, evidence, and disclosure as data sensitivity or consequence increases.
