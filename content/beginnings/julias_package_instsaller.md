+++ 
date = "2021-07-26"
title = "Julia's Package Installer Pkg"
slug = "julias-package-installer-pkg" 
tags = []
categories = []
+++


Pkg knows best.

The more that I learn about JuliaLange and software development in Julia, the more I like the Pkg. Pkg is of course Julia's package manager. 

To give a high level overview, a lot ofthe environmen problems that occur in python are sovled in Julia by the sandboxing behavior of Pkg (much like npm).

If Project.toml is the CEO of a Julia Package, Manifest.toml is Accountant.

Things in Project.toml compat section are updated with the up command

Project.toml describes the project on a high level. It has project meta data and dependencies and version requirements.

Manifest.toml is an “absolute record of the state of the packages in the environment”.  Includes exact information about direct and indirect dependencies. 

It is supposed to be true that given a Project.toml and a Manifest.toml, you can instantiate the exact same environment.

API

Instantiate

If Manifest.toml exists in active project, download all packages as described. If Manifest.toml doesn’t exist, get a set of feasible packages from project.toml and install them, then create a manifest.toml 
