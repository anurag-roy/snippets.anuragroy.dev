---
title: 'Delay'
tags: ['TypeScript', 'Promise', 'Delay']
---

Wait for a period of time in JavaScript.

```typescript
export const delay = async (millis: number) =>
  new Promise((resolve) => setTimeout(resolve, millis));
```

#### Example Usage

```typescript
// Wait for 2 seconds
await delay(2000);
```

#### Bonus: Node.js

If in node, you could also just do

```typescript
import { setTimeout as delay } from 'node:timers/promises';

// Wait for 2 seconds
await delay(2000);
```
