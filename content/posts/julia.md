+++ 
date = "2021-01-28"
title = "Julia"
slug = "julia"
tags = []
categories = []
+++

#### Tuple
Built in data structure with __fixed-length__ that can hold __any values__ but cannot be changed (__immutable__)

```sh
julia > x = (2, "soy sauce", "mirin")

(2, "soy sauce", "mirin")
```

```sh
julia > x[2]

"soy sauce"
```

#### Named Tuple
Elements in tuple can be given names. If so, then its a named tuple.

```sh
julia > x = (protein="beef", carb="rice")

(protein = "beef", carb = "rice")
```

### Core Essentials

__Core.Array__: N-dimensional dense array with elements of type T

```sh
julia > Array{T, N}
```

### Base Essentials

__Base.vcat__: concatenate along 1 dimension

```sh
julia > a = [1 2 3]
julia > b = [4 5 6; 7 8 9]
julia > vcat(a,b)

3×3 Array{Int64,2}:
 1  2  3
 4  5  6
 7  8  9
```


