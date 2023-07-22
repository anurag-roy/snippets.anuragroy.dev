---
title: 'Display prices in INR with Indian Numeral style commas'
tags: ['TypeScript', 'Intl', 'Price', 'INR']
---

```typescript
export const displayInr = (amount: number) =>
  '₹ ' +
  new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(amount);
```
