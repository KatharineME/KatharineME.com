+++ 
date = "2020-10-02"
title = "Sequence Analysis Benchmark"
slug = "sequence-analysis-benchmark" 
tags = []
categories = []
+++


## Precision FDA Truth Challenge
- https://precision.fda.gov/challenges/truth
- Genome in Bottle’s NA12878 also known as HG001.
- Used to develop the actual tools (overfitted to analyzing this sample).
- So using this sample to test for accuracy and quality is too easy.
- The NA24285 sample known as HG002 (the son of an Ashkenazi trio) was about to be released from GiaB (genome in a bottle) as another truth dataset. So this challenge took advantage of that HG002 to assess SA pipelines.
- HG002 and HG001 were sequenced under similar conditions and instruments at the same site.
HG001 is female, HG002 is male.
- People doing the challenge would run their SA pipeline on HG001 and HG002 FASTQ files provided, and submit the resulting VCF files as entry into the challenge.
- When the challenge was over GiaB published the truth VCF for HG002.
- Some pipelines are gender aware for the x chromosome and won’t call an snp on chromosome x heterozygous for an XY male, but other tools will (which is incorrect).
- They used Real Time Genomics’ vcfeval and Illuminas hap.py to compare vcfs.
- Vcfeval generates an intermediate vcd and hap.py counts indels and snp.


## Genome in a Bottle (Giab)
- NA12878
    - Pilot genome
    - Female, caucasian ancestry
    - From CEPH Utah Reference Collection
    - 6 vials of DNA (ua0-ua5)
    - 14 libraries prepared in parallel using Illumina TruSeq (LT) PCR Free Kit
    - 3 libraries were made from first and last tubes
    - 2 libraries were made from others
    - Fragmented with sonication, size selected with beads, sequenced on HiSeq 2500 2x148 PE reads

- Chinese Han family trio
    - Son was sequenced at 100X, others were sequenced at 300X
    - Son is what giab recommends using at this time, because its being actively updated
- Ashkenazi Jew family trio

