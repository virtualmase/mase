import { readFileSync } from 'node:fs';

const path = 'prototypes/first-proof/index.html';
const html = readFileSync(path, 'utf8');
const required = [
  '<main id="main">',
  'aria-label="Primary navigation"',
  'role="tablist"',
  'role="tabpanel"',
  'aria-live',
  'aria-selected="true"',
  'aria-selected="false"',
  'data-lens="context"',
  'data-lens="control"',
  'data-lens="recovery"',
  'data-lens="record"',
  'No collection',
  'does not collect, store, transmit, or score your choices',
  'prefers-reduced-motion',
  'Skip to quality lens'
];

for (const token of required) {
  if (!html.includes(token)) throw new Error(`Required proof token missing: ${token}`);
}

const prohibited = ['<form', 'fetch(', 'XMLHttpRequest', 'localStorage', 'sessionStorage', 'navigator.sendBeacon', 'script src='];
for (const token of prohibited) {
  if (html.includes(token)) throw new Error(`Unexpected collection or external dependency token: ${token}`);
}

const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(match => match[1]);
if (scripts.length !== 1) throw new Error(`Expected one inline script; found ${scripts.length}.`);
new Function(scripts[0]);

const tabCount = (html.match(/data-lens="/g) || []).length;
if (tabCount !== 4) throw new Error(`Expected four quality-lens tabs; found ${tabCount}.`);

console.log('MASE first-proof quality check passed.');
