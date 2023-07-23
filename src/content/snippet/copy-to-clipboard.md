---
title: 'Copy text to clipboard'
tags: ['TypeScript', 'Clipboard']
---

```typescript
const copyToClipboard = async (textToCopy: string) => {
  if (!navigator.clipboard)
    throw Error('Clipboard API not supported in current browser');
  if (!window.isSecureContext) throw Error('Can only copy in secure contexts');

  await navigator.clipboard.writeText(textToCopy);
};
```

#### Fallback Copy (Deprecated)

```typescript
const fallbackCopyToClipboard = (textToCopy: string) => {
  // Create textarea in Document, focus and select
  let textArea = document.createElement('textarea');
  textArea.value = textToCopy;
  textArea.style.position = 'fixed';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    let successful = document.execCommand('copy');
    if (!successful) {
      throw new Error('execCommand failed to copy to clipboard');
    }
  } catch (err) {
    throw new Error(`execCommand failed: ${err}`);
  } finally {
    // Remove the created Textarea
    document.body.removeChild(textArea);
  }
};
```
