+++ 
date = "2021-05-05"
title = "RNA-Seq Analysis"
slug = "rna-seq-analysis"
tags = []
categories = []
+++

## DNA vs. RNA

{{< rawhtml >}}
<div style="text-align:center">
<img style="height: 250px;" src="/images/dna_vs_rna.jpg">
<p style="font-size:18%; color: #8f8f8f; margin: 0;">Photo credit to biologydictionary.net</p>
</div>
{{< /rawhtml >}}

DNA and RNA are different molecules and hold different information. DNA is more or less fixed and consistent across all your cells, with the exception of de novo mutations (in skin cells from UV light for example), whereas RNA produced by the cell is changing all the time.

From acetylation to methylation, alternative splicing, and other regulatory mechanisms, our cells use a bunch of different strategies to specialize the way they read and transcribe the genome, resulting in very different functions (why skin cells are so different from heart cells).

{{< rawhtml >}}
<div style="text-align:center">
<img style="height: 220px;" src="/images/skin_heart_cell.png">
<p style="font-size:18%; color: #8f8f8f; margin: 0;">Photo credit to Biorender</p>
</div>
{{< /rawhtml >}}

RNA is like a snapshot of the cell. Results of RNA-Seq will be vastly different between cell types and over time in the same cell. For example, a cell might be fighting a pathogen or in the process of division, these will produce vastly different results. Even you may give a very different impression if someone meets you at work versus out at home. Its the same concept. Cell type dependent and time dependent.

In sum: DNA tells you what the cells are working with, RNA tells you what they're up to.


## RNA-Seq

Whether we are trying to figure out how cells respond to a drug or delineate the cell states of a tumor, RNA-Seq is currently the best way to assess the gene expression of cells. However it is a bit of a misnomer because we don't actually sequence the RNA. We first convert it into cDNA, which is more stable, then sequence it. Let's break it down step by step.

#### Sampling

The main challenge with isolating RNA from a sample is RNA's instability. Compared to DNA, RNA is less stable because it is single stranded and because it has a  reactive hydroxyl group (OH) on the second carbon of its sugar ring instead of a hydrogren.

However, assuming RNA was successfully isolated, what kind of RNA will be recovered? This is the typical breakdown:

- 85% is ribosomal RNA (rRNA)
- 10-12% is transfer RNA (tRNA)
- 2-3% is messenger RNA (mRNA)
- <3% is lncRNA, miRNA, ncRNA, and circRNA

Some researches are interested in studying the ribosomal RNA, in which case this is good. For researchers interested in different RNAs, enrichment techniques can be applied to increase those signals. See below. 

#### Library Preparation

__1. Check for Degredation__

Can be done with RNA gel. If mRNA is degraded, special treatments need to be done to repair transcripts first.

__2. Enrich for mRNA__

- Poly-A Enrichment
    - Beads that bind to the poly A tails on mRNA trancripts and pull them down, isolating them from other RNAs.
    - Cant be used in prokaryotic cells becuase they typically dont have poly A tails on their mRNA transcripts.
- rRNA depletion
    - Selectively remove rRNA sequences.

__3. Convert to cDNA__

Why? Increases stability and its easier for sequencing.

__4. Fragment__

After conversion, fragments will be many different sizes, because transcripts vary in length. To fix this, we do fragmentation (enzymatic or via sonication). As usual, small biases in per base sequence content in the first ~10 bases can be introduced here.

Agilent bioanalyzer can tell you how efficient fragmentation was and the distribution of fragement size in your sample. 

__5. Ligate Adapters__

__6. QC Library__

#### Sequencing

75 bp is a common length for RNA-Seq reads. Single end sequencing is more common in RNA-Seq than DNA-Seq.

single end is sually enough for differential expression analysis. De novo sequencing or splice variant anlaysis would require paried end longer reads at greater depth.

## Alignment

This is where it gets interesting. RNA-Seq alignment presents challenges on top of those that already existed with DNA-Seq.

## Normalization

__1. Normalize the number of reads per sample__

Without this normalization, you would think the gene expression of sample B is double the gene expression of sample C. Wherein reality, their gene expression maybe almost identical.

{{< rawhtml >}}
<div style="text-align:center">
<img style="height: 230px;" src="/images/sample_depth.png">
<p style="font-size:18%; color: #8f8f8f; margin: 0;">Photo credit to Biorender</p>
</div>
{{< /rawhtml >}}

__2. Normalize the number of reads per gene__

Genes vary in length. If you counted the number of reads mapped to genes A and B below, you would think gene B has twice the expression of gene A. Normalizing by gene length sovles this problem.

{{< rawhtml >}}
<div style="text-align:center">
<img style="height: 280px;" src="/images/genes_different_length.png">
</div>
{{< /rawhtml >}}


__Common normalization methods that accomplish these__
- RPKM (Reads Per Kilobase Million)
    - For single end RNA-Seq
    - Steps for a single sample:
        - Step 1: Divide total number of reads by 1,000,000
            - We call this number the per million scaling factor
        - Step 2: Divide the read count for each gene by the per million scaling factor
            - We call this reads per million
        - Step 3: Divide the reads per million of each gene by the length of the gene in kilobases (divide by 1 if gene length is 1kb).
- FPKM (Fragments Per Kilobase Million)
    - For paired end RNA-Seq
    - It is the same as RPKM except that is avoids counting forward and reverse reads twice for a given fragment on the flow cell.
- TPM (Transcript Per Million)
    - Uses the same steps as RPKM but in a different order.
    - Steps for a single sample:
        - Step 1: Divide the read count for each gene by the length of the gene in kilobases (divide by 1 if gene length is 1kb).
            - We call this reads per kilobase
        - Step 2: Calculate total reads per kilobase
        - Step 3: Divde total reads per kilobase by 1,000,000

__Whats the best method to use?__

Probably TPM. Here's why.

Lets say we performed RNA-Seq on three samples (each sample gets one pie in the pictures below).

#### RPKM

If we normalize our data with RPKM, for each sample, the total RPKM is different. As you can see below, One sample has a total RPKM of 10, while the other two are 8 and 9. Because of this, we can't directly compare the RPKM of Gene B across the three samples. For example if we compare the RPKM of Gene in samples 1 and 2, we would think it's the same, even though it accounts for a larger percentage of total expression in sample 2.

{{< rawhtml >}}
<div style="text-align:center">
<img style="height: 280px;" src="/images/rpkm.png">
</div>
{{< /rawhtml >}}

#### TPM

If we normalize our data with TPM, for each sample, the total TPM is the same. That means that when Gene B's TPM is greater in sample 2 than sample 1, its expression is actually greater in sample 2 than sample 1. Isn't that great?

{{< rawhtml >}}
<div style="text-align:center; padding: 50 0;">
<img style="height: 280px;" src="/images/tpm.png">
</div>
{{< /rawhtml >}}

Joshua Starmer has [a fantastic video](https://www.youtube.com/watch?v=TTUrtCY2k-w&t=495s) on these methods if you're looking for more. 
