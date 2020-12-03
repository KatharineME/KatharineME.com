+++ 
date = "2020-11-10"
title = "Strelka2"
slug = "strelka2" 
tags = []
categories = []
+++

Germline and somatic variant caller made by Illumina.

Somatic calls require a matched normal sample to ake variant calls. The matached normal sample helps Strelka identify the germline variants versus somatic variants.

All methods are optimized by default for whole genome DNA-Seq. RNA-Seq is still in development and not fully supported.

For best somatic indel performance, Strelka is deisgned to be run with Manta.

## Manta

A structural variant and indel caller. Manta provides additional indel candidates to Strelka up to a given maximum indel size (49 by default).

## Input

Strelka accepts BAM or CRAM.

Input other than paired-end reads are ignored by default.

Reads lengths above 400bp have not been tested.

## How it Works

## Outputs

VCF 4.1 format.

