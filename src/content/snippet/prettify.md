---
title: 'Prettify'
tags: ['TypeScript', 'Types']
---

A TypeScript type alias called `Prettify`.
It takes a type as its argument and returns a new type that has the same properties as the original type,
but the properties are not intersected. This means that the new type is easier to read and understand.

```typescript
type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
```

For deeply nested types:

```typescript
type Prettify<T> = {
  [K in keyof T]: T[K] extends object ? Prettify<T[K]> : T[K];
} & {};
```

#### Use case

Suppose we have a type that has many intersections:

```typescript
export type SimpleShape = {
  color: string;
} & {
  size: number;
} & {
  shape: 'circle' | 'square';
};
```

When we hover over the type `SimpleShape` with many intersections, it can be difficult to see the resolved type. It would be helpful if there was a way to prettify the display of these types.

With `Prettify` we can exactly do so, using:

```typescript
type Shape = Prettify<SimpleShape>;
//   ^? type Shape = {
//        color: string;
//        size: number;
//        shape: "circle" | "square";
//      }
```
