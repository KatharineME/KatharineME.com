+++ 
date = "2020-09-15"
title = "Read Pre-Processing"
slug = "read-preprocessing" 
tags = []
categories = []
+++

Pre-processing is an umbrella term that can mean filtering out / trimming low quality reads and reads contaminated with adapter sequences, and / or correcting for sequencing baises such as batch or lane effects.


## Sequencing Biases 
- __Batch effects__ include any errors that occur after random fragmentation of the DNA until it is input to the flow cell.
    * e.g., PCR amplification and reverse transcription artifacts. 
- __Lane effects__ include any errors that occur from the point at which the sample is input to the flow cell until data are output from the sequencing machine.
    * e.g., systematically bad sequencing cycles and errors in base calling.
- [Source](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2881125/)



## Adapter trimming
- Adapters are almost always trimmed from 3’ end instead of 5’ end. Illumina reads don’t need to have the 5’ end adapter trimmed because there is a primer sequence that binds to the 5’ end and sequencing by synthesis begins with the first base on the DNA insert.
- [Illumina adapter sequences](https://support.illumina.com/content/dam/illumina-support/documents/documentation/chemistry_documentation/experiment-design/illumina-adapter-sequences-1000000002694-14.pdf)

## Most popular pre-processors

### Skewer
- 2015
- Adapter trimmer
- Less popular, but cited in good papers indicating quality
- Not maintained, git issues are more or less ignored
- Poor documentation
### Trimmomatic
- 2014
- Adapter trimmer for Illumina reads
- Fairly documented
- Not actively maintained by main developer
- Somewhat maintained by other unrelated contributors
- Popular, praised in the community
### Cutadapt
- 2011
- Adapter trimmer
- Well documented
- Actively maintained
- Some doubts about quality in the community
### Fastp
- 2018
- https://github.com/OpenGene/fastp
- All around pre-processor, many utilities
- Very fast, supposedly 2x-5x faster than other pre-processors / trimmers
- Well documented
- Actively maintained. 800 stars on Github, >100 issues, > 100 issues resolved
- Hot right now

You can find at least one source for each that argues it is the best adapter / pre-processing tool. I have highest hopes for fastp.


## Run fastp
Paramters to use for paired end short read sequencing.
* --adapter_sequence
* --adapter_sequence_r2
* —-in1
* —-in2
* —-out1
* —-out2
* —-unpaired1
* —-unpaired2

## FATSQ file naming conventions
- Before you pre-process the reads, you need to understand what the file names mean right?
- [Illumina FASTQ file naming convention](https://support.illumina.com/help/BaseSpace_OLH_009008/Content/Source/Informatics/BS/NamingConvention_FASTQ-files-swBS.htm)

## Forward and reverse reads

- [Forward and reverse reads in paired- end sequencing](https://www.cureffi.org/2012/12/19/forward-and-reverse-reads-in-paired-end-sequencing/)

<img src"images/paired_end_reads.jpg">
