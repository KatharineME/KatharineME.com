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
- Basically a named tuple of vectors which __behaves__ like a vector of named tuples
- Table can be sorted by any number of primary keys (defined using parameter `pkey`)
- Use `table` function to create or `loadtable` to load existing data

```sh
julia > x = 1:6
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

```sh
julia > t[1]

(x = 1, y = 'a', z = 1.069356265804105)
```

### NDSparse
- Behaves like a sparse array with arbitrary indices
- The keys of an NDSparse array are sorted
- Use `loadndsparse` to load existing data

```sh
nd = ndsparse((x=x, y=y), (z=z,))

2-d NDSparse with 6 values (1 field named tuples):
x  y   │ z
───────┼──────────
1  'a' │ 1.0548
2  'a' │ 1.64493
3  'a' │ -0.738508
4  'b' │ 0.325126
5  'b' │ 0.299526
6  'b' │ 0.787615
```
```sh
nd[1, 'a']

(z = 1.0548018299672375,)
```
```sh
nd[:, 'a']

1-d NDSparse with 3 values (1 field named tuples):
x │ z
──┼──────────
1 │ 1.0548
2 │ 1.64493
3 │ -0.738508
```


### Select

There are a few main JuliaDB functions used for selecting data: `select`, `reduce`, `groupreduce`, `groupby`, `join`, `transform`, and `reindex`.

### API
[More on JuliaDB API.](https://juliadb.juliadata.org/latest/api/)

### Statistics
JuliaDB integrates with OnlineStats (a julia stats package) using the functions `reduce` and `groupreduce`.

```sh
julia > using JuliaDB, OnlineStats
julia > t = table(1:100, rand(Bool, 100), randn(100));
julia > reduce(Mean(), t; select = 3)

Mean: n=100 | value=0.159962
```
