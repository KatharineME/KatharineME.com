+++ 
date = "2021-07-26"
title = "Julia's Package Installer Pkg"
slug = "julias-package-installer-pkg" 
tags = []
categories = []
+++

Julia's package manager is called Pkg. Pkg creates and manages separate environments for individual julia projects, much like npm maintains an environment for each of its modules.

Pkg actually has its own sort of REPL that you can access from command line by typing:


In the pkg REPL you can enter commands that manage package environments like `up` for update and `add` to add a dependency. But more on that later. You can also call Pkg from the julia REPL like so:


## Project.toml and Manifest.toml

To understand how Pkg works, you must know about Project.toml and Manifest.toml. You can think of Project.toml as the input for the Pkg interpretter, and Manifest.toml as Pkg's output.

A julia project is defined as a pair of Project.toml and Manifest.toml. A julia package is definded as a julia project with a `uuid` and `name` set in the Project.toml.

Project.toml looks like this:

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
It describes the project on a high level. The `name` field is the name of the project, the `uuid` field sets a unique identifier for the project, the `author` field is simply the name and email of the author, and the `version` of the project follows semantic versioning (major_version.minor_version.patch) More about semantic versioning. 

The `deps` section lists the dependencies of the project. Notice the dependencies under `deps` dont include details like version number or the packages they depend on.

The `compat` section lists compatibility requirements: basically what has to be true for this package to run. For example `julia = "1.6"` is for the example project above to run. In the compat section you can also specifiy whether you will allow minor version updates or patch updates to the specificed packages.

A typical Manifest.toml looks like this:

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
Things in Project.toml compat section are updated with the up command

Manifest.toml is an “absolute record of the state of the packages in the environment”. It includes exact information about direct and indirect dependencies. 

Given a Project.toml and a Manifest.toml, you can instantiate the exact same environment.

## How Pkg and the .tomls work together

Lets consider a workflow where you are building a simple hello work package and see how Pkg manages the development of this package.



## Pkg API

`add`
Add a dependency (a package that the current project will use and depend on)

`rm`
Remove a dependency.

`resovle`


`instantiate`

If Manifest.toml exists in active project, download all packages as described. If Manifest.toml doesn’t exist, get a set of feasible packages from project.toml and install them, then create a manifest.toml 
