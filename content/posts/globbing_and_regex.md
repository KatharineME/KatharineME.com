+++ 
date = "2021-01-09"
title = "Globbing and Regex"
slug = "globbing-and-regex"
tags = []
categories = []
+++

Globbing is for filename completion in shell and regex is for searching text.

Globbs are for filenames and regex is for searching text.

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

The question mark means one unknown character in the file glob.

Will list `All.md` but not `About.md` or `A.md`.
```sh
ls A??.md
```

## Regex



## grep and fgrep Come to Play

`grep` is a command line tool for searching text. `grep` never uses globbing. `grep` uses regex. However, with a command like this one:

```sh
grep file* README.md
```

the shell will do globbing before passing the command to grep. The shell will find `filename.txt` in the current directory (assuming it exists) and then grep will look for "filename.txt" in the README.md. However, adding quotes like this:

```sh
grep "file*" README.md
```

will prevent the shell from globbing and then `file*` will be interpretted as regex and grep will look for "fil" ending with zero or more "e" in README.md.

`fgrep` or `grep -F` on the other hand allows you to search for exactly what you type. For example, this command:

```sh
grep -F "$" file.txt
```

will return all the lines with the "$" character in file.txt.



