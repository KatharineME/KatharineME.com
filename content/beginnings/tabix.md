+++ 
date = "2021-01-13"
title = "Tabix"
slug = "tabix"
tags = []
categories = []
+++

Tabix indexes a tab-delimted genome position file (a VCF files for example). Once indexed, tabix can quickly retrieve data from any part of the file without decompressing it. Thank you Heng Li :prayer: (tabix author).




Return genomic region.
```sh
tabix vcf.gz chr20:28986977-28986977

tabix vcf.gz chr20:200000-3000000
```

Return Header of VCF.
```sh
tabix -H vcf.gz
```

Return chromosome names in VCF.
```sh
tabix -l vcf.gz
```

Return regions listed in a file. The file can be a bed (.bed, .bed.gz, .bed.bgz) or or a TAB-delimited file with CHROM, POS, and, optionally, POS_TO columns, where positions are 1-based and inclusive
```sh
tabix -R vcf.gz
```


## Careful with that .gz file ...

`gzip` and `bgzip` are not the same thing. Wait ... what is `bgzip`? Good question. `bgzip` is a compression algorithm that creates a series of `gzip` compressed blocks which are each 64kb in size. To go along with all these little blocks is whats called a "virtual offset". The vitual offset is actually an unsigned (meaning nonnegative) 64 bit integer. And this integer holds information which acts like a map of the `bgzip` file. Its because of the "block + map" structure that `bgzip` files can be accessed without unzipping the entire file. And this is why tabix can access lets say `chr1:452923-452923` without unzipping the whole `variants.vcf.gz` (a bgzipped file).

But why did I say be careful? It's because `bgzip` files also end with `.gz`. So how do you know if a `.gz` file is bgzipped or just gzipped? Because for the reasons explained in the paragraph above, you cannot access a part of a `gzip` file without unzipping it, which is why like tabix require `bgzip` compression.

Learn more about `bgzip` and `gzip` in [Peter Cock's post](https://blastedbio.blogspot.com/2011/11/bgzf-blocked-bigger-better-gzip.html).
