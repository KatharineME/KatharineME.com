+++ 
date = "2021-01-28"
title = "Julia"
slug = "julia"
tags = []
categories = []
+++

![julia](/images/julia_banner.png)

## Why Learn Julia? What are the Value Propositions?

- A combination of Python's usability and C++ speed .
    - Writing a prototype of code in Python, only to later implement it in C++ for speed is a waste.
    - Now these strengths are in one language.
- Readable
    - Designed to be easy to understand. 
- Dynamic
    - Meaning you don't have to define data types, Julia will do that for you.
    - However you have the option of defining them if you want.
- Developed for parallel processing.
- No dependencies on other languages.
    - However, Julia can call other languages easily. 
- Includes math and data science symbols.
    - So an equation can become a line of code.
- Optional arguments in functions.
- Functions can be combined.

_The words that we have available change what we will do._


## How Does Julia work?

- When Julia starts it will look through all your code and define data types, converting the dynamic language to a static one. This takes some time. After this, Julia is super fast.



## Concepts

Macro
- A macro takes in code (a julia expression) as input and spits out code (a different julia expression). So, a macro is a code generator.


#### Tuple
Built in data structure with __fixed-length__ that can hold __any values__ but cannot be changed (__immutable__)

```julia
julia > x = (2, "soy sauce", "mirin")

(2, "soy sauce", "mirin")
```

```julia
julia > x[2]

"soy sauce"
```

#### Named Tuple
Elements in tuple can be given names. If so, then its a named tuple. Allowd you to access via names.

```julia
julia > x = (protein="beef", carb="rice")

(protein = "beef", carb = "rice")
```

```julia
julia > x[:protein]

"beef"
```

### Core Essentials

__Core.Array__: N-dimensional dense array with elements of type T

```julia
julia > Array{T, N}
```

### Base Essentials

__Base.vcat__: concatenate along 1 dimension

```julia
julia > a = [1 2 3]
julia > b = [4 5 6; 7 8 9]
julia > vcat(a,b)

3×3 Array{Int64,2}:
 1  2  3
 4  5  6
 7  8  9
```


