+++ 
date = "2020-10-15"
title = "Git LFS vs Others"
slug = "git-lfs-vs-others" 
tags = []
categories = []
+++


## Git LFS 

Pros
- Very easy to setup, manage which files are tracked, and remove if need be
- Naturally integrated with git so you can manage your code and data storage on one platform

Cons
- Maximum of 2GiB file size
    - This is not encouraging when thinking about genomic data

Pricing
- https://aws.amazon.com/s3/pricing/
- $5 / month per data pack, where a data pack is 50GB storage with 50GB bandwidth
- If you have 3 data packs, you would pay $15 / month and have 150GB of storage with 150GB bandwidth

## Other Options Please?

### Amazon S3

Pricing
- $0.023 / month per GB for the first 50TB. This is equal to $1.15 / month for 50GB storage
- Much cheaper than Git LFS

### Google Cloud

Pricing
- About $0.20 / month per GB which is about $1 / month for 50GB
- But adding in costs from interacting with the storage it is $1.19 / month per 50GB.
- About the same as Amazon S3
- Cost per GB goes down as amount of data stored increaes.

### DVC
- https://dvc.org

Stands for "Data Version Control". I found it in this article which I thought would breakdown the weaknesses of GitLFS, but ended up hard core pitching DVC: https://towardsdatascience.com/why-git-and-git-lfs-is-not-enough-to-solve-the-machine-learning-reproducibility-crisis-f733b49e96e8

Looks promising but its not fun to integrate an entirely new tool into your stack.

### BackBlaze B2
https://www.backblaze.com/b2/cloud-storage.html

Their pitch is that they are cheaper and offer up to 10GB of storage with 30GB of bandwdth. 