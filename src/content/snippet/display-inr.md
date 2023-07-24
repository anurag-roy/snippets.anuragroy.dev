---
title: 'Display prices in INR'
tags: ['TypeScript', 'Intl', 'Price', 'INR']
---

Display prices with the Rupee symbol, Indian numeric system commas and 2 decimal digits:

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
