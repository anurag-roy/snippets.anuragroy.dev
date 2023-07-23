---
title: 'Display prices in INR with Indian Numeral style commas'
tags: ['TypeScript', 'Intl', 'Price', 'INR']
---

```typescript
const displayInr = (amount: number) =>
  '₹ ' +
  new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(amount);
```

#### Example usage and outputs:

```typescript
displayInr(23);
// "₹ 23.00"

displayInr(1007.5);
// "₹ 1,007.50"

displayInr(1299999.98999);
// "₹ 12,99,999.99"
```
