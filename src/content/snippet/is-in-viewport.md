---
title: 'Is in Viewport'
tags: ['TypeScript', 'Browser', 'Viewport']
---

Check if an element is in the browser viewport or not.

```typescript
const isInViewport = (element: HTMLElement) => {
  const { top, right, bottom, left } = element.getBoundingClientRect();
  return (
    top >= 0 &&
    left >= 0 &&
    bottom <= window.innerHeight &&
    right <= window.innerWidth
  );
};
```
