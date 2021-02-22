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
- Iterates over NamedTuples of __rows__

#### Indexed Table
- Basically a named tuple of vectors which __behaves__ like a vector of named tuples
- Table can be sorted by any number of primary keys (defined using parameter `pkey`). The table will be sorted by the first priamry key, then the second, and so on.
- Use `table` function to create or `loadtable` to load existing data

```julia
x = 1:6
y = vcat(fill('a', 3), fill('b', 3))
z = randn(6);

t = table((x=x, y=y, z=z); pkey = [:x, :y])

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
```julia
t[1]

(x = 1, y = 'a', z = 1.069356265804105)
```
```julia
t[1].y

'a'
```
```julia
for item in t
    println(item)
end

(x = 1, y = 'a', z = -0.5856775236297086)
(x = 2, y = 'a', z = -1.8225049388821863)
(x = 3, y = 'a', z = 0.2538693543229162)
(x = 4, y = 'b', z = 3.0769831992975276)
(x = 5, y = 'b', z = 1.0156881097767552)
(x = 6, y = 'b', z = 0.7371713978290413)
```


### NDSparse
- Behaves like a sparse array with arbitrary indices
- The keys of an NDSparse array are sorted
- Use `loadndsparse` to load existing data
- Its made for working with data that is sparse over the domain of the index (stock data)
- Iterates over NamedTuples of __values__

```julia
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
```julia
nd[1, 'a']

(z = 1.0548018299672375,)
```
```julia
nd[:, 'a']

1-d NDSparse with 3 values (1 field named tuples):
x │ z
──┼──────────
1 │ 1.0548
2 │ 1.64493
3 │ -0.738508
```
```julia
for item in nd
    println(item)
end

(z = 1.0548018299672375,)
(z = 1.6449349801308328,)
(z = -0.7385076399317578,)
(z = 0.3251263120611191,)
(z = 0.2995262607206383,)
(z = 0.7876150538404173,)
```

### Select Data

There are a few JuliaDB functions used for selecting data: `select`, `reduce`, `groupreduce`, `groupby`, `join`, `transform`, and `reindex`.

Selecting a column. This is the same as `select(t, :x)`
```julia
julia > select(t, 1)

6-element Array{Int64,1}:
 1
 2
 3
 4
 5
 6
```

### API
[More on JuliaDB API.](https://juliadb.juliadata.org/latest/api/)

### Statistics
JuliaDB integrates with OnlineStats (a julia stats package) using the functions `reduce` and `groupreduce`.

```julia
julia > using JuliaDB, OnlineStats
julia > t = table(1:100, rand(Bool, 100), randn(100));
julia > reduce(Mean(), t; select = 3)

Mean: n=100 | value=0.159962
```


