+++ 
date = "2021-01-09"
title = "Globbing and Regex"
slug = "globbing-and-regex"
tags = []
categories = []
+++


## Globbing

The asterisk means "zero or more characters" in the file glob.

Lists all files ending in `.md`.
```sh
ls *.md
```

Lists all files starting with `A` and ending with `.md`.
```sh
ls A*.md
```

The question mark means a single unknown character.

Will list `All.md` but won't list `About.md` or `A.md`.
```sh
ls A??.md
```

## Where Globbing and Regex Overlap

Sometimes the shell will interpret regex and globbing and globbing as regex because they have syntax overlap.




