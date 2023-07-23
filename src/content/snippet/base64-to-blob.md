---
title: 'Convert base64 string to blob'
tags: ['TypeScript', 'Base64', 'Blob']
---

```typescript
const convertBase64toBlob = (base64String: string, mimeType: string) => {
  const byteCharacters = atob(base64String);
  const byteArrays = [];
  const sliceSize = 512;

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  return new Blob(byteArrays, { type: mimeType });
};
```
