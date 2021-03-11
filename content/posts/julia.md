+++ 
date = "2021-01-28"
title = "Julia"
slug = "julia"
tags = []
categories = []
+++


![julia](/images/julia_banner.png)

{{< rawhtml >}}
<p style="font-size:110%; color: #6f439c; margin: 0; font-style: italic; padding-top:2%;">
The words that we have available change what we will do.
</p>
{{< /rawhtml >}}

## Why Learn Julia? What Are the Value Propositions?

- __A combination of Python's usability and C++ speed__
    - Writing a prototype of code in Python, only to later implement it in C++ for speed is a waste.
    - Now these strengths are in one language.
    - This is accomplished using just in time compilation. The way this works is: you write dynamic Julia code, then Julia compiles it into static Julia, then everything runs super fast.
- __Dynamic__
    - Meaning you don't have to define data types, Julia will do that for you.
    - However you have the option of defining them if you want.
- __Readable__
    - Designed to be easy to understand. 
- __Flexible__
    - There are optional arugments in functions.
    - Functions can be combined.
    - There is a rich language of types for contructing and describing objects.
- __Multiple Dispatch__
    - Where a function or method can be dynamically dispatched at runtime based on the type of the object the function is being called on, or attributes of one or more of its arguments. An example would be a function whose arguments can be a either integers or strings, and where multiple arguments are string values, the function is dispatched in a certain way.
    - Single dispatch, on the other hand, is when the way that a function is dispatched at runtime is determined by a single data type, or a single function argument. This _special_ argument is highlighted syntactically in some languages.
- __Asynchronous I/O__
    - This simply means processes are allowed to continue running before data transmission is finished.
    - This is contrasted with Synchronous I/O or Blocking I/O where processes need to wait for data transfers to finish before they can continue.
- __Developed for parallel processing__
- __No dependencies on other languages__
    - However, Julia can call other languages easily. 
- __Includes math and data science symbols__
    - So an equation can become a line of code.
- __Focus on scientific computing__


## Weaknesses

- __Just in time compilation__
    - It is the reason Julia is easy to use and also lightening fast. So its also a plus.
    - When you run something for the first time it will take surprisingly long to run. This is because all the Julia code you're calling (including julia packages that you called / included) get compiled into a static Julia (like C++ which is static from the start). 
    - However, after the compilation is done, it is super fast.
    - The work-around for this is to keep your Julia session running for as long as possible.
- __Community and packages are still maturing__
    - Being a young language, we expect this.

## Key Features

Packages
- DataFrames.jl
- Plots.jl
- Gadfly.jl
- Vegalite.jl

IDE
- Juno
- IJulia for Jupyter

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


