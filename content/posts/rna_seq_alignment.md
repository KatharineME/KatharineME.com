+++ 
date = "2021-05-05"
title = "RNA-Seq Alignment"
slug = "rna-seq-alignment"
tags = []
categories = []
+++

Here we discuss how RNA-Seq alignment diverages from DNA-Seq alignment. But first, we need to fully understand RNA and RNA-Seq. 


## DNA vs. RNA

![sample depth](/images/dna_vs_rna.jpg)

{{< rawhtml >}}
<p style="font-size:18%; color: #8f8f8f; margin: 0;">Photo credit to biologydictionary.net</p>
{{< /rawhtml >}}

RNA and DNA are different molecules and hold different information. DNA is more or less fixed and consistent across all your cells, with the exception of de novo mutations (in skin cells from UV light for example), whereas RNA produced by the cell is changing all the time.

From acetylation to methylation, alternative splicing, and other regulatory mechanisms, our cells use a bunch of different strategies to specialize the way they read and transcribe the genome, resulting in very different functions (why our skin cells are so different from heart cells).

RNA is a bit like a snapshot of the cell. Results of RNA-Seq will be vastly different between cell types and over time in the same cell. For example, the cells might be fighting a pathogan or in the process of division, these will produce vastly different results. Even you may give off a very different impression if someone meets you at work versus out at a bar. Its the same concept. Cell type dependent and time dependent.

In sum: DNA tells you what the cells are working with, RNA tells you what they're up to.


## RNA-Seq

Its a bit of a misnomer because we don't actually sequence the RNA. We first convert it into cDNA, which is much more stable, then sequence it. But lets break it down step by step.

#### Sampling

What kind of RNA will be in the sample?

- 85% is ribosomal RNA (rRNA)
- 10-12% is transfer RNA (tRNA)
- 2-3% is messenger RNA (mRNA)
- <3% is lncRNA, miRNA, ncRNA, circRNA

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

#### Sequencing

75 bp is a common length for RNA-Seq reads. Single end sequencing is more common in RNA-Seq than DNA-Seq.

single end is sually enough for differential expression analysis. De novo sequencing or splice variant anlaysis would require paried end longer reads at greater depth.

## Alignment

## Normalization

1. Normalize the number of reads per sample. 

![sample depth](/images/sample_depth.png)

1. Normalize by gene length.

## Interpretation




