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
  'does not collect, store, transmit, or score a choice',
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
if (scripts.length !== 1) throw new Error(`Expected one inline script; found ${scripts.length}.`);
new Function(scripts[0]);

const modes = (html.match(/data-mode="/g) || []).length;
if (modes !== 4) throw new Error(`Expected four skill-directory modes; found ${modes}.`);

console.log('MASE skill-directory quality check passed.');
