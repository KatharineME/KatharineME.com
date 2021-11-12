+++ 
date = "2021-11-11"
title = "Julia's Package Installer Pkg"
slug = "julias-package-installer-pkg" 
tags = []
categories = []
+++

{{< rawhtml >}}
<img src="/images/pkg.png" style="max-height: 200px;">
<p> 
{{< /rawhtml >}}

Julia's package manager is called Pkg. Pkg creates and manages separate environments for individual julia projects, much like npm maintains an environment for each of its modules. Understanding how Pkg works is essential for being effective in julia. So let's dive in.

Pkg has its own REPL that you can access from command line by starting julia and then hitting the `]` key, which will move you from the julia REPL into the pkg REPL.

{{< rawhtml >}}
<img src="/images/pkg_repl.png" style="max-height: 250px;">
<p> 
{{< /rawhtml >}}

In the pkg REPL you can enter commands that manage package environments like `up` for update and `add` to add a dependency. But more on that in the API section later. 

You can also call Pkg from the julia REPL like so:

```julia
using Pkg;

Pkg.add("Example")
```

## Project.toml and Manifest.toml

To understand how Pkg works, you must first understand Project.toml and Manifest.toml. For your reference, this is a typical julia project structure:

```sh
LICENSE
Manifest.toml
Project.toml
README.md
src/
    Project.jl
test/
    runtests.jl
```

You can think of Project.toml as the input for the Pkg interpretter, and Manifest.toml as Pkg's output.


### Project.toml
```toml
name = "test"
uuid = "3b32e9fd-c20c-4cfa-a9b2-bfc1ff37ba3c"
authors = ["KatharineME <katharine.me@icloud.com>"]
version = "0.1.0"

[deps]
Revise = "295af30f-e4ad-537b-8983-00126c2a3abe"
Example = "7876af07-990d-54b4-ab0e-23690620f79a"

[compat]
BenchmarkTools = "1.2.0"
Revise = "3.1.20"
julia = "1.6"
```
It describes the project on a high level. The `name` field is the name of the project, the `uuid` field sets a universally unique identifier (UUID[https://en.wikipedia.org/wiki/Universally_unique_identifier]) for the project, the `author` field is simply the name and email of the author, and the `version` of the project follows semantic versioning (major_version.minor_version.patch) More about semantic versioning. 

The `deps` section lists the dependencies of the project. Notice the dependencies under `deps` dont include details like version number or the packages they depend on.

The `compat` section lists compatibility requirements: basically what has to be true for this package to run. For example `julia = "1.6"` is for the example project above to run. In the compat section you can also specifiy whether you will allow minor version updates or patch updates to the specificed packages. More documentation on the compat section [is here](https://pkgdocs.julialang.org/v1/compatibility/#Compatibility).

### Manifest.toml
```toml
# This file is machine-generated - editing it directly is not advised

[[ArgTools]]
uuid = "0dad84c5-d112-42e6-8d28-ef12dabb789f"

[[Artifacts]]
uuid = "56f22d72-fd6d-98f1-02f0-08ddc0907c33"

[[Base64]]
uuid = "2a0f44e3-6c83-55bd-87e4-b1978d98bd5f"

[[BenchmarkTools]]
deps = ["JSON", "Logging", "Printf", "Profile", "Statistics", "UUIDs"]
git-tree-sha1 = "61adeb0823084487000600ef8b1c00cc2474cd47"
uuid = "6e4b80f9-dd63-53aa-95a3-0cdb28fa8baf"
version = "1.2.0"

[[CodeTracking]]
deps = ["InteractiveUtils", "UUIDs"]
git-tree-sha1 = "9aa8a5ebb6b5bf469a7e0e2b5202cf6f8c291104"
uuid = "da1fd8a2-8d9e-5ec2-8556-3022fb5608a2"
version = "1.0.6"

[[Dates]]
deps = ["Printf"]
uuid = "ade2ca70-3891-5945-98fb-dc099432e06a"

```
Manifest.toml is an “absolute record of the state of the packages in the environment”. It includes exact information about direct and indirect dependencies. 

As you can see in the comment at the top, Manifest.toml is not intended to be manually edited, it is strictly Pkg's output. It is continuously being regenerated and updated as the envrionment on the project changes.

Given a Project.toml and a Manifest.toml, you can `instantiate` the exact same environment.

A julia project is defined as a pair of Project.toml and Manifest.toml. A julia package is definded as a julia project with a `uuid` and `name` set in the Project.toml.

## Pkg API

#### `generate`
Creates a boilerplate julia project in the current directory.

#### `add`
Add a package (a package that the current project will use and depend on). This command installs the package, updates the Project.toml `deps` section, and updates the Manifest.toml.

#### `build`
Runs the `deps/build.jl` script in the current package, then runs the build scripts for all the dependencies in depth-first recursive order. 

#### `rm` or `remove`
Remove a package. This command uninstalls the package from the project environment and removes it from the Project.toml. If no other packages depend on it, it will be removed from the Manifest.toml. If other packages this project depends on use it, it will remain in the Manifest.toml. You can run `rm -m pkg_name` to remove the package and all packages that depend on it from the Manifest.toml.

#### `instantiate`
If Manifest.toml exists in the active project, download all packages as described. If Manifest.toml doesn’t exist, get a set of feasible packages from project.toml and install them, then create a manifest.toml.

#### `up` or `update`
Update packages according to the `deps` and `compat` sections of Project.toml. Passing `-m` like in `update -m` will update packages according to the Manifest.toml.

#### `test`
Runs the `test/runtest.jl` in the package directory.
