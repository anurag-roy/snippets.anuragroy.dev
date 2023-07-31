---
title: 'Merge classNames helper'
tags: ['TypeScript', 'Intl', 'Date', 'Ordinal']
---

#### Simple version

```typescript
export const cn = (...classes: (boolean | string)[]) => classes.filter(Boolean).join(' ');
```

#### Advanced version with twMerge

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes))
}
```