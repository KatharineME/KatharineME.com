+++ 
date = "2022-10-05"
title = "GRCH38 and Beyond"
slug = "grch38_and_beyond"
tags = []
categories = []
+++

From [this paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6699627/#SD1) on benchmarking practices:

"Moving forward, groups will also need to modify benchmarking strategies to address changes in the way the human genome itself is represented. Today the most common way of representing the human genome involves a set of linear chromosomes (e.g., the most common usage of GRCh37). There are key advantages to non-linear representations of the genome, including ability to recognize copy-number and other polymorphisms directly in the reference, and as a result more graphical structures are in development.25 The GRCh38 build of the human genome makes a key step towards this with its use of ALT loci, which provide multiple distinct versions of specific regions of the genome.26 These ALT loci are not well-accounted for by most aligners or the benchmarking tools we describe, and their impact on benchmarking studies is largely unexplored and likely would require a variety of samples with differing ALT alleles. It is likely that the core representation of the genome will continue to evolve over time, and benchmarking tools will continue to evolve."

In this video we are going to talk about reference genomes. We'll cover the most popular reference genomes,how they were made, their limitations, and what changes we can expect in the future.

Why do we need a reference?
First, to review, the existence of a reference genome allows us to summarize a person by simply listing the 4 to 5 million places where they are different from the reference, instead of listing all 3.2 billion of their bases. Which is a massive convenience. However, since the reference is what everybody is comparing against, creating and maintaining the reference genome is a big responsibility.

History of the reference genome
still maintained by four organizations – the National Center for Biotechnology Information (NCBI), the Genome Institute at Washington University, the Wellcome Trust Sanger Institute, and the European Bioinformatics Institute – that were leading players in the original Human Genome Project. These organizations make up the GRC/ or genome reference consortium, which is responsible for keeping the reference genome at the forefront of accuracy and completeness, and is still plugging gaps and making refinements over a decade after the Human Genome Project was declared complete.

Most popular reference genomes, their names, whats equivalent to what, and how they are made.
WHo is in charge of creating and maintaining reference genomes?

NCBI36 from March 2006
grch37 released in march 2009
grch38 released in december 2013

grch37 and hg19 are the same

ghrch38 versus grch37

- Repair incorrect reads (Build 38 alters around 8,000 single nucleotides across the genome, which “in many cases will improve the annotation or analysis of clinically relevant genes,” )
- inclusion of model centromere sequences
- addition of alternate loci (Build 38 contains 261 alternate loci across 178 regions – one of which, the KIR locus involved in the differentiation of natural killer cells, has been given 35 distinct sequences.)
- GRCh38 also adds new sequences to help fill those pieces of the genome that have never been fully captured

This is the first reference to have centromere sequences. however there are still gaps present in the genome.

One novel resource that GRCh38 takes advantage of is a hydatidiform mole, a type of abnormal pregnancy that occurs when a sperm fertilizes an enucleated egg. That sperm then reduplicates its DNA, resulting in two identical copies of each chromosome. Since the resulting cell has no allelic variation, it can be used to generate unambiguous reads in regions of very high diversity.

The biggest leap in coverage in GRCh38 comes from the centromeres, which are modeled for the first time in the reference genome’s history. Once thought to be important only during cell division, centromeres have generated new interest as the evidence mounts that their sequences may have real impacts on function.

applied a new analytical approach to create estimated centromere sequences. Centromeres are defined largely by very slight variations on a massively repeated 171-base sequence

GRC did incorporate some changes to the MUC5AC gene based on a PacBio sequence posted in GenBank. As more sequences generated on long-read technology are placed in public repositories, the GRC will have more opportunity to benefit from advances in capturing these difficult regions.

CONVERSION TOOL from GRCH37 to GRCH38. MCBI remapping tool: https://www.ncbi.nlm.nih.gov/genome/tools/remap

Show a diagram of the life of reference genomes, as they progress from various sources.

Limitations of the latest and greatest reference. What regions we dont have sequence for, what was the sample pool for this genome.

## Future

GRC says they:

"have decided to indefinitely postpone our next coordinate-changing update (GRCh39) while we evaluate new models and sequence content from ongoing efforts to better represent the genetic diversity of the human pangenome, including those of the Telemore-to-Telomere Consortium and the Human Pangenome Reference Consortium"
