+++ 
date = "2020-10-15"
title = "Trace Ancestry Through DNA"
slug = "trace-ancestry-through-dna"
tags = []
categories = []
+++


### Method 1: BioJulia's GeneticVariation.jl

https://github.com/BioJulia/GeneticVariation.jl/blob/master/docs/src/man/io/vcf-bcf.md

BioJulia is an open source project / organization that makes biology tools with Julia. They are actively maintaining many of their repositories. However GeneticVariation.jl has less commit and hasnt been updated much in the last two years. It only has 20 stars and is overall not a very active project. However, it seems to work.

But ...

They are query in a very manual way. THey didnt rea the vcf into a dataframe, or create an index. they just search row by row and output a dictionary. So this tool isn't very useful.


### Method 2: Query.jl applied on vcf loaded into DataFrame

There are some posts that complain Query.jl is too slow:
- https://discourse.julialang.org/t/speeding-up-query-with-a-big-dataset/19508
- https://discourse.julialang.org/t/large-dataframe-fast-row-selection/14849
