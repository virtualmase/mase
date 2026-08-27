# MASE Quality Baseline

Load this reference when a front-end decision needs an external standard, a measurable criterion, or a claim boundary.

| Area | Use this guidance | Source |
|---|---|---|
| Accessibility | Use WCAG 2.2 as the current baseline. Prioritize perceivable, operable, understandable, and robust content; ensure visible focus, usable target sizes, and consistent help where applicable. | [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) |
| Interaction performance | Treat click, tap, and keyboard feedback as part of UX. The current good INP threshold is ≤200 ms at the 75th percentile. Prefer small interaction logic and test common user flows, including while loading. | [web.dev: INP](https://web.dev/articles/inp) |
| Human-AI interaction | Differentiate human roles and responsibilities. Make context, oversight, ability to challenge output, and review/exception paths appropriate to the task visible. | [NIST AI RMF, Appendix C](https://airc.nist.gov/airmf-resources/airmf/appendices/app-c-ai-risk-management-and-human-ai-interaction/) |
| Generative discovery | Continue normal people-first search practice: crawlable text, useful content, readable structure, good page experience, accurate visible structured data, and internal links. Do not create AI-only markup or content variants to manipulate results. | [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) and [Google: AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) |
| Structured data | Add only accurate markup that describes visible content; prefer a small complete JSON-LD representation over extensive incomplete claims. | [Google: Structured data introduction](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) |

## Implementation notes

- Cite a source when asserting a standard, a threshold, an adoption trend, or a capability claim.
- Separate a sourced fact from a design judgment or hypothesis.
- Do not represent WCAG review as certification unless a qualified assessment supports that statement.
- Do not represent performance targets as achieved until measured in the relevant environment.
- Do not infer AI-search visibility, rankings, or conversion outcomes from structured data or AI-oriented content alone.
