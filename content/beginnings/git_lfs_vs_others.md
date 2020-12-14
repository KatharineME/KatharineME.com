+++ 
date = "2020-10-15"
title = "Git LFS vs Others"
slug = "git-lfs-vs-others" 
tags = []
categories = []
+++


## Git LFS 

Pros
- Very easy to setup, manage which files are tracked, and to remove if need be

Cons
- maximum of 2GB storage
- Difficult to remove from your Github account once you've added it
- Not included when someone forks your repo.
    - Kind of defeating the shareable / reproducible value proposition of Github

## Other Options Please?

### DVC
- https://dvc.org

Stands for "Data Version Control". I found it in this article which I thought would breakdown the weaknesses of GitLFS, but ended up hard core pitching DVC: https://towardsdatascience.com/why-git-and-git-lfs-is-not-enough-to-solve-the-machine-learning-reproducibility-crisis-f733b49e96e8

Looks promising but its not fun to integrate an entirely new tool into your stack.

### BackBlaze B2
https://www.backblaze.com/b2/cloud-storage.html

Their pitch is that they are cheaper and offer up to 10GB of storage with 30GB of bandwdth. 