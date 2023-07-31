---
title: 'Stream download a file'
tags: ['TypeScript', 'Node.js', 'Fetch', 'Stream']
---

Download and save a file using streams in Node.js, great for downloading large files without clogging up memory.

```typescript
import { createWriteStream } from 'node:fs';
import { Readable } from 'node:stream';
import { finished } from 'node:stream/promises';

export const downloadFile = async (url: string, fileName: string, encoding: string) => {
  const writeStream = createWriteStream(fileName, { encoding });
  // Use body since it is a readable stream
  console.log('Starting File download...');
  const { body } = await fetch(url);
  if (body) {
    //   Pipe body to the writestream
    await finished(Readable.fromWeb(body as any).pipe(writeStream));
    console.log('File download successful!');
  } else {
    throw new Error('File empty!');
  }
};
```