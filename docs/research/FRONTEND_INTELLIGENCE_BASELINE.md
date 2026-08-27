# Front-End Intelligence Baseline

**Purpose:** Establish a current, portable evidence base for MASE interface standards. This is not a prediction market for visual trends. It records durable practices that make an interface more usable as devices, models, search behavior, and interaction complexity change.

## Core finding

MASE should prioritize a fast, accessible, comprehensible base layer over increasingly ornamental “AI” aesthetics. The first MASE proof therefore uses semantic HTML, responsive CSS, keyboard-visible focus, no third-party application dependencies, no user-data collection, and a visible explanation of human authority and system limits.

## Evidence and implications

| Area | Sourced finding | MASE implication |
|---|---|---|
| Accessibility | WCAG 2.2 is the current W3C Recommendation. W3C advises using WCAG 2.2 for greater future applicability and describes a framework of perceivable, operable, understandable, and robust content across device types.[1] | Build semantic landmarks, clear heading order, keyboard navigation, visible focus, responsive layouts, and controls with readable names before refinement or visual motion. |
| Interaction speed | INP measures click, tap, and keyboard responsiveness throughout a visit. Web.dev identifies a p75 INP of 200 ms or less as good responsiveness and stresses timely visual feedback.[2] | Prefer native HTML/CSS and small client-side behavior. Test each important interaction under a realistic path rather than optimizing screenshot appearance alone. |
| Human–AI interaction | NIST notes that human roles and responsibilities in using and overseeing AI systems should be clearly defined and differentiated. It also recognizes that people interpret outputs and explanations differently.[3] | Make control, review, escalation, sources, uncertainty, and record-keeping interface concerns—especially in AI-assisted workflows. |
| Generative discovery | Google’s current guidance says fundamental search practices—not special AI-only markup—remain the basis for appearing in AI search features. It emphasizes crawlability, text availability, readable structure, people-first non-commodity content, and accurate visible structured data.[4] [5] | Build pages for readers first, with good title/description, internal links, accessible visible content, appropriate crawl controls, and accurate metadata. Avoid “GEO/AEO” hacks and content expansion for query variants. |
| Structured data | Google recommends JSON-LD when structured data is appropriate, but stresses that it must describe visible content and that fewer complete, accurate fields are preferable to many incomplete ones.[6] | Add schema only when it truthfully represents the visible page. Do not invent model-comparison scores, client results, service locations, or credentials. |

## Comparative claims boundary

No source in this baseline establishes that one broad model family will universally create better front ends than another. MASE therefore treats "outcode" as an **operating challenge** rather than an unqualified public performance claim: develop better outcomes by applying explicit context, critical-path testing, accessible semantics, human-control design, and release discipline around any generated implementation.

A real benchmark must name the model/tool and version, task specification, relevant context, generated source, evaluation rubric, reviewer, date, test environment, known limitations, and result. It must make clear whether the test evaluates code generation, design judgment, product discovery, accessibility, performance, or a particular workflow.

## Research backlog

| Question | Evidence needed before a public conclusion |
|---|---|
| Which interface failures most often distinguish generated front-end drafts from production-ready experiences? | Repeated, attributable review findings from a stable benchmark set. |
| Do MASE quality gates reduce rework or improve task completion? | An appropriately scoped before/after study with a defined user and task. |
| Which visual patterns make AI state and human review easiest to understand? | User comprehension testing across concrete workflows. |
| Is a browser-native local-only prototype enough for early buyer learning? | Conversations with target product teams and observed use of a bounded proof. |

## References

[1]: https://www.w3.org/TR/WCAG22/ "W3C — Web Content Accessibility Guidelines (WCAG) 2.2"
[2]: https://web.dev/articles/inp "web.dev — Interaction to Next Paint (INP)"
[3]: https://airc.nist.gov/airmf-resources/airmf/appendices/app-c-ai-risk-management-and-human-ai-interaction/ "NIST — Appendix C: AI Risk Management and Human-AI Interaction"
[4]: https://developers.google.com/search/docs/appearance/ai-features "Google Search Central — AI Features and Your Website"
[5]: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide "Google Search Central — Optimizing your website for generative AI features on Google Search"
[6]: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data "Google Search Central — Introduction to structured data markup in Google Search"
