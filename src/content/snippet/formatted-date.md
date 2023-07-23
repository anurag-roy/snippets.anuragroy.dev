---
title: 'Get formatted date with ordinals from date string'
tags: ['TypeScript', 'Intl', 'Date', 'Ordinal']
---

```typescript
const getFormattedDate = (dateString: string, locale = 'en-IN') => {
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

#### Example usage and outputs:

```typescript
getFormattedDate('03-22-2023');
// "22nd March 2023"

getFormattedDate('08-17-2023', 'en-US');
// "August 17th, 2023"

getFormattedDate('12-31-2023', 'en-GB');
// "31st December 2023"
```

#### Limitations

This logic only works for English locales and might not work for others like French, German, etc.
