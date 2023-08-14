---
title: 'Pick keys'
tags: ['TypeScript', 'Pick']
---

Pick keys from an object to construct a picked object, with full type support.

```typescript
const pick = <T, K extends keyof T>(obj: T, keys: K[]) =>
  keys.reduce((pickedObj, currentKey) => {
    pickedObj[currentKey] = obj[currentKey];
    return pickedObj;
  }, {} as Pick<T, K>);
```

#### Example Usage

```typescript
const x = { a: 1, b: 2, c: 3 };
const y = pick(x, ['b']);
// { b: 2 }
```
