+++ 
date = "2021-02-19"
title = "JuliaDB"
slug = "juliadb"
tags = []
categories = []
+++

JuliaDB has two main data structures: Table and NDSparse.


### Table
    - Tables store data in columns
    - Tables are typed, meaning changing a table requires returning a new table
    - Julidb has few mutating operations because a new table is necessary in most 

#### Indexed Table
    - Basically a named tuple of vectors which __behaves__ like a vector of named tuples.
    - Table can be sorted by any number of primary keys (aka column names).
    - Can be created from scratch with `table` function or made from existing data with `loadtable`

```sh
julia > x = 1:5
julia > y = vcat(fill('a', 3), fill('b', 3))
julia > z = randn(6);

julia > t = table((x=x, y=y, z=z); pkey = [:x, :y])

Table with 6 rows, 3 columns:
x  y    z
─────────────────
1  'a'  1.06936
2  'a'  -1.29235
3  'a'  -0.725817
4  'b'  -0.422334
5  'b'  0.0246361
6  'b'  0.669536
```

### NDSparse
    - Behaves like a sparse array with arbitrary indices
    - The keys of an NDSparse array are sorted


### Base Essentials

Base.vcat - concatenate along 1 dimension

