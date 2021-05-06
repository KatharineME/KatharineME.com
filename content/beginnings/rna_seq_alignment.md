+++ 
date = "2020-10-15"
title = "RNA-Seq Alignment"
slug = "rna-seq-alignment"
tags = []
categories = []
+++

Here we discuss how RNA-Seq alignment diverages from DNA-Seq alignment. But first, we need to fully understand RNA and RNA-Seq. 


## RNA vs. DNA 

RNA and DNA are different molecules and hold different information. DNA is more or less fixed and consistent across all your cells, with the exception of de novo mutations (in skin cells from UV light for example), whereas RNA produced by the cell is changing all the time.

From acetylaion to methylation, alternative splicing, and other regulatory mechanisms, our cells use a bunch of different strategies to specialize the way they read and transcribe the genome, resulting in very different functions (why our skin cells are so different from heart cells).

RNA is a bit like a snapshot of the cell. Results of RNA-Seq will be vastly different between cell types and over time in the same cell type. For example, the cells might be fighting a pathogan or in the process of division, these will produce vastly different results. Even you may give off a very different impression if someone meets you at work versus out at a bar. Its the same concept. Cell type dependent and time dependent.

In sum: DNA tells you what the cells are working with, RNA tells you what they're up to.


## RNA-Seq

Its a bit of a misnomer because we don't actually sequence the RNA. We first convert it into cDNA, which is much more stable, then sequence it. But lets break it down step by step.

#### Sampling

What kind of RNA will be in the sample?

- 85% is ribosomal RNA (rRNA)
- 10-12% is transfer RNA (tRNA)
- 2-3% is mRNA
- <3% is lncRNA, miRNA, ncRNA, circRNA

#### Library Preparation

If mRNA is degraded, special treatments to repair transcript need to be done first.

1. Enrich for mRNA

- Poly-A Enrichment
    - Beads that bind to the poly A tails on mRNA trancripts and pull them down, isolating them from other RNAs.
    - Cant be used in prokaryotic cells becuase they typically dont have poly A tails on their mRNA transcripts.
- rRNA depletion
    - Selectively remove rRNA sequences.

2. Convert to cDNA

Why? Increases stability and its easier for sequencing.

3. Fragment

After conversion, fragments will be many different sizes, because transcripts vary in length. To fix this, we do fragmentation (enzymatic or via sonication). As usual, small biases in per base sequence content in the first ~10 bases can be introduced here.

4. Ligate Adapters

#### Sequencing

75 bp is a common length for RNA-Seq reads. Single end sequencing is more common in RNA-Seq than DNA-Seq.

single end is sually enough for differential expression analysis. De novo sequencing or splice variant anlaysis would require paried end longer reads at greater depth.

## RNA-Seq Alignment



## Interpretation




