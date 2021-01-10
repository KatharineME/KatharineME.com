+++ 
date = "2021-01-09"
title = "Globbing and Regex"
slug = "globbing-and-regex"
tags = []
categories = []
+++


## Globbing

Globbing in for filename completion in command line.


The asterisk means "zero or more characters" in the file glob.

Lists all files ending in `.md`.
```sh
ls *.md
```

Lists all files starting with `A` and ending with `.md`.
```sh
ls A*.md
```

The question mark means one unknown character in the file glob.

Will list `All.md` but not `About.md` or `A.md`.
```sh
ls A??.md
```

## Regex

Regex is for searching text.
