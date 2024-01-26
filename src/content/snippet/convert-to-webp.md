---
title: 'Convert to webp'
tags: ['Bash', 'webp']
---

Shell script to convert all files in directory to webp, with default params, or standard cwebp params passed from command.

```bash
#!/bin/bash

PARAMS=('-m 6 -q 70 -mt -af -progress')

if [ $# -ne 0 ]; then
	PARAMS=$@;
fi

cd $(pwd)

shopt -s globstar nullglob nocaseglob extglob

for FILE in $PWD/**/*.@(jpg|jpeg|tif|tiff|png); do
    cwebp $PARAMS "$FILE" -o "${FILE%.*}".webp;
done
```

To fix problems with globstar(especially on MacOS), use this [gist](https://gist.github.com/reggi/475793ea1846affbcfe8).
