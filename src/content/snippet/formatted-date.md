---
title: 'Get formatted date from date string'
tags: ['TypeScript', 'Intl', 'Date']
---

```typescript
export const getFormattedDate = (dateString: string) => {
  const locale = 'en-IN';

  const ordinalMap: Partial<Record<Intl.LDMLPluralRule, string>> = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    other: 'th',
  };
  const ordinalPluralRules = new Intl.PluralRules(locale, { type: 'ordinal' });

  const formatter = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const dateParts = formatter.formatToParts(new Date(dateString));

  // Modify day part by adding ordinal
  const dayPart = dateParts.find((p) => p.type === 'day')!;
  const ordinal = ordinalMap[ordinalPluralRules.select(Number(dayPart.value))];
  dayPart.value = dayPart.value + ordinal;

  return dateParts.map((p) => p.value).join('');
};
```
