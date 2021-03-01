+++ 
date = "2020-07-15"
title = "Kinship Estimation"
slug = "kinship-estimation"
tags = []
categories = []
+++

Two adults think they may be related based off old photos and records. How do we know for sure? That's the topic of this post.

If it had not been for a potential family member entering our lives, I probably never would have written this. It provided the necessary motivation to learn how kinship estimation works. In this post I give an introduction to kinship from a genetic perspective. Then I describe how I did the genetic kinship analysis to discover I have another family member.


![siblings](/images/siblings.jpg)

## Genetic Kinship

There is no set amount of DNA that same-related people share. For example, two biological siblings could have been passed many of the same bits of DNA from their parents, or they could been passed many different bits. This element of chance results in the "Range % Shared DNA" column below. 


| Relationship | Average % Shared DNA | Range % Shared DNA |
| ----------------- | -------------------- | ------------------ |
| Mother / Son      | 52.5% | NA |
| Father / Son      | 47.5% | NA |
| Mother / Daughter | 50%   | NA |
| Father / Daughter | 50%   | NA |
| Full Sibling      | 50%   | 38%-61% |
| Grandparent / Grandchild | 25%   | 17%-34% |
| Aunt or Uncle / Niece or Nephew | 25%   | 17%-34% |
| Half Sibling | 25%   | 17%-34% |
| Great-grandparent / Great-grandchild | 12.5%   | 4%-23% |


For this reason, when comparing two people's genomes, it isn't immediately obvious how they are related. But adding in age and life history can give us the answer we're looking for.

_Side note: Sons and mothers share more DNA simply because the X chromosome is much larger than the Y chromosome._

_Side note: Some DNA we can only get from one of our parents. For boys obviously, the Y chromosome comes from their father. And for everyone, mitochondrial DNA comes from the mother. Whatever mitochondrial DNA the fertilized egg held, is the mitochondrial DNA the child will have._


## Method

So how do we check genetic relatedness? Can't we just check the percent of matching DNA? Easy right? Yes and no.

Here we're going to apply the KING kinship estimator. First we use bcftools to merge the VCFs of the people we want to  compare, then use Plink to create the necessary input files: .bed (binary genotype file), .fam (family file), and .bim (map file). Finally we run the KING program to calculate the pair-wise kinship coefficient where monozygotic twins get about 0.35, 1st degree relatives are 0.177 - 0.35, 2nd degree relatives are 0.08 to 0.17, 3rd degree relatives are between 0.04 and 0.08, and a negative number indicates an unrelated relationship.


#### 1. bcftools merge

`bcftools merge` by default will merge VCF1 with VCF2 to make the merged VCF in the manner below. Before merging, make sure the sample names in the header of each VCF (column names 10 and beyond) are what you want them to be. If they are not, one option is manually changing them in a text editor.

Person1 VCF:
```sh
#CHROM	POS	ID	REF	ALT	QUAL	FILTER	INFO	FORMAT	Person1
chr1	10120	.	T	C	1	LowGQX;LowDepth;NoPassedVariantGTs	SNVHPOL=4;MQ=6	GT:GQ:GQX:DP:DPF:AD:ADF:ADR:SB:FT:PL	0/1:22:0:2:2:1,1:0,1:1,0:0:LowGQX;LowDepth:30,0,22
chr1	51898	.	C	A	6	LowGQX;NoPassedVariantGTs	SNVHPOL=2;MQ=35	GT:GQ:GQX:DP:DPF:AD:ADF:ADR:SB:FT:PL	0/1:38:5:6:0:4,2:1,2:3,0:2.1:PASS:40,0,101
```
Person2 VCF:
```sh
#CHROM	POS	ID	REF	ALT	QUAL	FILTER	INFO	FORMAT	Person2
chr1	10250	.	A	C	1	LowGQX;NoPassedVariantGTs	SNVHPOL=4;MQ=11	GT:GQ:GQX:DP:DPF:AD:ADF:ADR:SB:FT:PL	0/1:23:0:4:0:3,1:1,0:2,1:0:LowGQX:26,0,80
chr1	51898	.	C	A	6	LowGQX;NoPassedVariantGTs	SNVHPOL=2;MQ=35	GT:GQ:GQX:DP:DPF:AD:ADF:ADR:SB:FT:PL	0/1:17:0:7:0:6,1:3,1:3,0:0:LowGQX:19,0,146
```

Merge command:
```sh
bcftools merge person1.vcf.gz person2.vcf.gz > merged.vcf
```

Merged VCF:
```sh
#CHROM	POS	ID	REF	ALT	QUAL	FILTER	INFO	FORMAT	Person1	Person2
chr1	10120	.	T	C	1	LowGQX;LowDepth;NoPassedVariantGTs	SNVHPOL=4;MQ=6	GT:GQ:GQX:DP:DPF:AD:ADF:ADR:SB:FT:PL	0/1:22:0:2:2:1,1:0,1:1,0:0:LowGQX;LowDepth:30,0,22	./.:.:.:.:.:.:.:.:.:.:.
chr1	10250	.	A	C	1	LowGQX;NoPassedVariantGTs	SNVHPOL=4;MQ=11	GT:GQ:GQX:DP:DPF:AD:ADF:ADR:SB:FT:PL	./.:.:.:.:.:.:.:.:.:.:.	0/1:23:0:4:0:3,1:1,0:2,1:0:LowGQX:26,0,80
chr1	51898	.	C	A	6	LowGQX;NoPassedVariantGTs	SNVHPOL=2;MQ=35	GT:GQ:GQX:DP:DPF:AD:ADF:ADR:SB:FT:PL	0/1:38:5:6:0:4,2:1,2:3,0:2.1:PASS:40,0,101	0/1:17:0:7:0:6,1:3,1:3,0:0:LowGQX:19,0,146
```

Take a look at the three rows of the merged VCF. The first row is a variant that only Person1 has, the second row is a variant that only Person2 has, and the third row is a variant that both people have.

#### 2. Plink

```sh
plink --vcf example.vcf.gz --make-bed --out ex
```

This command will create four files.

#### 3. KING kinship estimator


