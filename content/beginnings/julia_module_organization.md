+++ 
date = "2021-07-26"
title = "Julia Module Organization"
slug = "julia-module-organization" 
tags = []
categories = []
+++


What is a Module?

A module is a self contained entity. It can only see what is inside itself.

Include vs. Using

`include` and `using` are two ways of accessing code in Julia. `using` tells Julia to reference something that has already been defined, while `include` tells Julia to copy and define code that was not previously defined. `include` should only be run once. Thereafter `using` should be used to access it.

This is the Kate.jl file.

```julia

module Kate

module A

    include(f1.jl)
    include(f2.jl)

end

module B

    include(f3.jl)
    include(f4.jl)

end

include(f5.jl)

end

```

In a Jupyter notebook I'll be able to run the following:

```jupyter

using Kate

Kate.A.f1()

Kate.B.f4()

Kate.f5()

```

However f4 actually uses f1. How do we make this work? This is what f4 looks like:

```julia

using ..A: f1

function f4(x)

    return f1(x)

end

```

In order for this to work, module A msut be defined before module B in the Kate.jl file. If the their order was reversed, julia would throw an error when it tried to call `using ..A: f1` because module A would not have been defined yet. Here is another illustration of why order matters in a module file like Kate.jl:

This module file while throw an error because when `a = b` is evaluated, `b` has not been defined.

```julia

module Kate

a = b

b = 5

end
```

However, this module file works. It doesnt matter that function `a` calls `b`and `a` comes before `b` becuase they are not being executed, they are merely being defined.

```julia

module Kate

function a()

    return b(5)

end

function b(x)

    return(x +5)

end

end
```



