+++ 
date = "2020-08-02"
title = "Library Preparation"
slug = "library-preparation" 
tags = []
categories = []
+++

## Initial Quality Check
- Check purity on Nanodrop (260/280 ratio shows RNA contamination)
- Check concentration on Qubit Fluorometer

## Fragmentation
Two main options for fragmenting the DNA
- Sonication
    - Uses a sonication machine
    - Pros: very little base bias in cuts made
    - Cons: Sonication machines are expensive, difficult to cut DNA fragments smaller than 300bp
- Enzyme digestion
    - Pros: cheaper, doesnt require large sonication machine
    - Cons: Produces minor base % bias in first 10 bases of fragments
        - This bias can be easily seen in FastQC results


## End Repair and A Tailing
In order to ligate the necessary adapters to the fragmented sequences, the ends of the fragments need to be made compatible with those adapters. To do that we use a series of enzymes that perform the exact cuts and additions we need.

1) T4 DNA Pol1 makes the ends of fragments blunt.
2) T4 PNK adds phosphate to 5' makes 3' OH.
3) Taq Pol adds tailing A to 3' end

## Ligation
