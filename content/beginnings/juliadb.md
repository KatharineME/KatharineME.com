+++ 
date = "2021-01-28"
title = "JuliaDB"
slug = "juliadb"
tags = []
categories = []
+++

In this post I'm going to explore juliaDB.jl and how it might be used to quickly retrieve results from a VCF file.

JuliaDB has two main data structures: Table and NDSparse.


### Table
    - tables store data in columns
    - tables are typed, meaning changing a table requires returning a new table
    - julidb has few mutating operations because a new table is necessary in most 




### NDSparse
    - Behaves like a sparse array with arbitrary indices
    - The keys of an NDSparse array are sorted



