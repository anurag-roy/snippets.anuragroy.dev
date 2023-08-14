---
title: 'Dynamic GitHub Theme in Shiki'
tags: ['CSS', 'GitHub Theme', 'Shiki', 'Markdown']
---

Dynamically switch between GitHub Light and Dark theme for code highlighting when using Shiki. The following code assumes dark theme will add a `dark` class on the `html` tag.

```css
:root {
  /* Light Theme */
  --shiki-color-text: #24292f;
  --shiki-color-background: #f6f8fa;
  --shiki-token-constant: #0550ae;
  --shiki-token-string: #0a3069;
  --shiki-token-comment: #6e7781;
  --shiki-token-keyword: #cf222e;
  --shiki-token-parameter: #116329;
  --shiki-token-function: #8250df;
  --shiki-token-string-expression: #0a3069;
  --shiki-token-punctuation: #24292f;
  --shiki-token-link: #0a3069;
}

.dark {
  /* Dark Theme */
  --shiki-color-text: #c9d1d9;
  --shiki-color-background: #161b22;
  --shiki-token-constant: #79c0ff;
  --shiki-token-string: #a5d6ff;
  --shiki-token-comment: #8b949e;
  --shiki-token-keyword: #ff7b72;
  --shiki-token-parameter: #7ee787;
  --shiki-token-function: #d2a8ff;
  --shiki-token-string-expression: #a5d6ff;
  --shiki-token-punctuation: #c9d1d9;
  --shiki-token-link: #a5d6ff;
}

pre {
  background-color: var(--shiki-color-background);
}

/* Line highlight styles */
code .line.highlighted {
  background-color: #d0d7de60;
  --tw-shadow: 2px 0 #0969da inset;
}

.dark code .line.highlighted {
  background-color: #30363d80;
  --tw-shadow: 2px 0 #58a6ff inset;
}

code .line {
  line-height: 1.75;
}
```
