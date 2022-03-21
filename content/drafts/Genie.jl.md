+++ 
date = "2021-10-05"
title = "Genie.jl"
slug = "genie.jl"
tags = []
categories = []
+++

![docker art](/images/genie_logo.png)

{{< rawhtml >}}

<p style="font-size:18%; color: #8f8f8f; margin: 0;">Photo credit to Genie.jl</p>
{{< /rawhtml >}}

Julia is a wonderful new language which combines Python's simplicity with C's speed. So when I considered what language to use for the backend of a web app I'm making, naturally I wanted to use Julia. Python has well established web frameworks like flask and Django. But being such a new language I was concerned Julia wouldn't have a fully developed web framework option like Python. I was happily mistaken. Genie.jl is Julia's most complete and most popular web framework at the time of this post. Here I want to take you with me as I learn Genie.jl and achieve the "unparalleled developer productivity, excellent run-time performance, and security by default" which Genie.jl identifies as its goals.

Uses HTTP.jl as the web server.

### Play with Genie in a Jupyter Notebook

Whip up a web server and

```julia
using Genie

route("/") do
    "Hi there!"
end
```

### Making a Genie App

Create a minimal, script-oriented app without database support and no templating engine. They are used more for scripting and creating simple applications. However the missing features can be added as the application grows.

```julia
Genie.newapp("BasicApp")
```

Create a fully blown app with datbase support, templating engine, etc. Comes with most things you need for a more complex app.

```julia
Genie.newapp_mvc("RobustApp")
```

```julia
Genie.loadapp()
```

### Standard App Workflow

A route points to a method in the controller - which is charged with building and sending the response over the network, back to the client.

### Genie App Filesystem

#### `routes.jl`

For a simple `Genie.newapp`, this is where all the logic for making functions to URLs goes.

#### `bin/`

Has scripts for starting the app. The server

#### `app/resources/`

Genie apps are built around "resources". Each resource is a business entity, like a product or user.
