---
title: 'Get formatted date for a timezone'
tags: ['TypeScript', 'Intl', 'Date', 'Timezone']
---

Convert a timestamp in millis to a particular timezone using JavaScript's `Intl`.

```typescript
const getDateForTimeZone = (
  millis: number,
  tz: string,
  locale = 'en-IN'
): string => {
  const dateFormatter = new Intl.DateTimeFormat(locale, {
    timeZone: tz,
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const timeFormatter = new Intl.DateTimeFormat(locale, {
    timeZone: tz,
    timeStyle: 'short',
  });

  const timezoneFormatter = new Intl.DateTimeFormat(locale, {
    timeZone: tz,
    timeZoneName: 'long',
  });

  return [
    `${dateFormatter.format(millis)}`,
    `${timeFormatter.format(millis).toUpperCase()}`,
    `${timezoneFormatter.formatToParts(millis).find((p) => p.type === 'timeZoneName')?.value || ''}`,
  ].join(' ');
};
```

#### Example usage and outputs:

```typescript
getDateForTimeZone(1690113193308, 'Asia/Kolkata');
// 23 Jul 2023 5:23 PM India Standard Time

getDateForTimeZone(1690113193308, 'America/Chicago', 'en-US');
// Jul 23, 2023 6:53 AM Central Daylight Time

getDateForTimeZone(1690113193308, 'Europe/Paris', 'fr-FR');
// 23 juil. 2023 13:53 heure d’été d’Europe centrale
```
