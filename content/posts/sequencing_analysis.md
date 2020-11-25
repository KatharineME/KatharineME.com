+++ 
date = "2020-10-15"
title = "Sequencing Analysis"
slug = "sequencing-analysis" 
tags = []
categories = []
+++

The human genome is 3.3 billion base pairs long.

75% of RNA-Seq sequences will be ribosomal.

Replicates
- Technical replicate: sequence same sample 2x
    - NGS technical replicates are usually 97% matching or better
- Biological replicate: different individual sequenced under same conditions

## General

- Variant calling algorithms have a larger effect on what variants are “found” than alignment algorithms.
- Novel variants, rare variants, and indels have more variance between pipelines than SNPs.
- Genomes of European descent are better represented in the public genome knowledge base and are therefore variant called more accurately. Genomes of African descent (where there is greater genetic diversity) , because they are more different from the human reference and are therefore more likely to have “rare” variants, are prone to more inaccurate variant calling.

## Cool Papers

- [Bioinformatics and Computational Tools for Next-Generation Sequencing Analysis in Clinical Genetics](https://www.mdpi.com/2077-0383/9/1/132)
- [Comparative analysis of whole-
genome sequencing pipelines to
minimize false negative findings](https://www.nature.com/articles/s41598-019-39108-2)


