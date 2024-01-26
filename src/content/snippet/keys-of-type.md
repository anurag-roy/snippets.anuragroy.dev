---
title: 'Keys of Type'
tags: ['TypeScript', 'Types']
---

Extract all the keys of a certain type `T` from object `O`.

```typescript
type KeysOfType<O, T> = {
  [K in keyof O]: O[K] extends T ? K : never;
}[keyof O & string];
```

#### Use case

Suppose we have a type `User` like so:

```typescript
type User = {
  id: string;
  name: string;
  isAdmin: boolean;
  isEnabled: boolean;
  hasVerifiedEmail: boolean;
};
```

And we want to extract all the boolean fields from `User` and put them in a new type called `UserFlags`. We can do so by:

```typescript
type UserFlags = KeysOfType<User, boolean>;
//   ^? type UserFlags = "isAdmin" | "isEnabled" | "hasVerifiedEmail"
```
