+++ 
date = "2021-01-13"
title = "Tabix"
slug = "tabix"
tags = []
categories = []
+++

Tabix indexes a tab-delimted genome position file (`.vcf` file for example). Once indexed, tabix can quickly retrieve data from any part of the file without decompressing it. Thank you Heng Li 🙏 (tabix author). Here are some things you can do with tabix to a `vcf.gz` file.


First, you'll want to index your VCF like this.

![command line](/images/tabix_make_index.png)

The index file is called `.tbi` and will be put adjacent to your `.gz` file.

![command line](/images/tabix_index_made.png)

Now you can check for the existence of a variant like so. Its important to remember, while you're doing this, that a polymorphism being in the VCF file is not synonymous with being interesting or important or rare. There are lots of harmful/interesting/important polymorphisms that are in the reference genome. But more on that in another post.

![command line](/images/tabix_one_variant.png)

And you can look for variants in region in the same way.

![command line](/images/tabix_region.png)

You can also do other useful / cool things with tabix, like these.

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

I like to use .bed files, here is an example of a .bed file.

```txt
```


## Careful with that .gz file ...

`gzip` and `bgzip` are not the same thing. Wait ... what is `bgzip`? Good question. `bgzip` is a compression algorithm that creates a series of `gzip` compressed blocks which are each 64kb in size. To go along with all these little blocks is whats called a "virtual offset". The vitual offset is actually an unsigned (meaning nonnegative) 64 bit integer. And this integer holds information which acts like a map of the `bgzip` file. Its because of the "block + map" structure that `bgzip` files can be accessed without unzipping the entire file. And this is why tabix can access lets say `chr1:452923-452923` without unzipping the whole `variants.vcf.gz` (a bgzipped file).

But why did I say be careful? It's because `bgzip` files and `gzip` files both end with `.gz`. So how do you know if a `.gz` file is bgzipped or just gzipped? Because for the reasons explained above, you cannot access a part of a `gzip` file without unzipping it, which is why like tabix requires `bgzip` compression. Luckily its easy to tell if your `.gz` file is in fact bgzipped. Just try to tabix it (create an index) and if its not bgzipped, tabi will tell you like this:

![command line](/images/tabix_not_bgzipped.png)

Learn more about `bgzip` and `gzip` in [Peter Cock's in depth post](https://blastedbio.blogspot.com/2011/11/bgzf-blocked-bigger-better-gzip.html).
