import { readFileSync } from 'node:fs';

const path = 'site/index.html';
const html = readFileSync(path, 'utf8');
const required = [
  '<main id="main">',
  'Skip to the skill directory',
  'aria-label="Primary navigation"',
  'role="tablist"',
  'role="tabpanel"',
  'aria-live="polite"',
  'data-mode="audit"',
  'data-mode="prototype"',
  'data-mode="benchmark"',
  'data-mode="harden"',
  'data-scenario="unavailable"',
  'data-scenario="uncertain"',
  'data-scenario="review"',
  'Context unavailable',
  'Result uncertain',
  'Human review required',
  'does not collect, store, transmit, or score a choice',
  'This drill stores no state, sends no request',
  'ArrowRight',
  'ArrowLeft',
  'prefers-reduced-motion',
  'https://github.com/virtualmase/mase',
  'proof/'
];

for (const token of required) {
  if (!html.includes(token)) throw new Error(`Required directory token missing: ${token}`);
}

const prohibited = ['<form', 'fetch(', 'XMLHttpRequest', 'localStorage', 'sessionStorage', 'navigator.sendBeacon', 'script src='];
for (const token of prohibited) {
  if (html.includes(token)) throw new Error(`Unexpected collection or external dependency token: ${token}`);
}

const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(match => match[1]);
if (scripts.length !== 2) throw new Error(`Expected two inline scripts; found ${scripts.length}.`);
scripts.forEach((script, index) => new Function(script) || console.log(`Parsed inline script ${index + 1}.`));

const modes = (html.match(/data-mode="/g) || []).length;
const scenarios = (html.match(/data-scenario="/g) || []).length;
if (modes !== 4) throw new Error(`Expected four skill-directory modes; found ${modes}.`);
if (scenarios !== 3) throw new Error(`Expected three resilience conditions; found ${scenarios}.`);

console.log('MASE skill-directory quality check passed.');
