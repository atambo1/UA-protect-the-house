# A Coding Assessment for Fullstack, Frontend, and Backend Engineers

## Welcome!

You're most likely here because you've been speaking with us about the possibility of joining our team. This tool is part of that conversation: talking about building software is great, but there's no substitute for actually _building_ something, and this tool is a framework for doing just that.

## How does this work?

There are two scenarios here, both vastly simplified from real-world aspects of our e-commerce infrastructure. One, the "backend scenario", involves API development and data transformation. The other, the "frontend scenario", involves retrieving data from an API that already exists, then rendering a UI around it.

You'll choose whichever of these scenarios appeals most to you, and implement it to the spec given later in this README.

Beyond satisfying the spec, there really are no requirements here. Use your judgment as an engineer, and build the code in the fashion and to the style which makes the most sense to you. Spend as much time, or as little, as you feel the task requires. When you're done, fork the app on Github and open a PR with your changes.

## Starting the application

This app is ready to run out of the box. (It's built on [create-react-app](https://github.com/facebook/create-react-app) and Express.js, if you're familiar with those.) To get it going, just perform the usual Node two-step: `npm install && npm start`. It'll tell you all about its listening ports in the console, and live reloading is present and accounted for.

## Background information

In this repository, you'll find both UI code (in [client/](client)), and API code (in [server/](server)). The UI is a React application; the API is an Express microservice, emphasis on the "micro-".

In place of a real datastore, this repository includes [a collection of mock data](server/product-data.json), with which you'll be working in both scenarios. (We thought about including a SQLite database and asking you to write SQL queries against it, but decided against doing so, at least in this 1.0 version. You're welcome! 😀👍)

The mock data represents a collection of product information. That information breaks down into a hierarchy of increasing specificity as follows:

At the top level, you have _styles_. A style is a basic "kind" of product: a _sock_, a _hat_, or the like.

A style has one or more _materials_. These are color variations on the basic product: an _orange_ sock, a _red_ hat, or the like.

A material has one or more _variants_. These are size variations on the color variation: a _large_ orange sock, a _one-size-fits-all_ red hat, or the like.

In the backend, this data is stored at the variant level, with style and material information hydrated into each variant. This makes more sense than it may initially appear: since a variant is what a customer actually purchases, in a very real sense the variant _is_ the "product".

Of course, there are also frequent cases where we need to deal with information at the style or the material level. That's where things get interesting - and that's where you come in!

## The scenarios

### Frontend

In this scenario, you're given an API endpoint (the "materials endpoint") which serves product information at the material level. You're asked to render that information into a grid view, as for example often happens with product search results.

The endpoint in question is served at `/api/materials`. Call that endpoint in a browser or REST client to see how product data is aggregated at that level.

Your task is to implement a page which calls the materials endpoint, and includes a frontend component which renders the resulting data into a grid of cells. The grid should widen and narrow with the client's viewport. Each cell needs to contain the material's image, along with the name and price of the product.

The definition of "done" for this scenario is being able to visit a "search" or "grid" or similar URL in the frontend (call it what you like), and have the grid component correctly render data from the materials endpoint.

(Extra credit: Support sorting or filtering on some property of the material data.)

### Backend

In this scenario, you're given a product detail page ("PDP") component which currently operates on mock data included in the frontend as a JSON blob. You're asked to build an API endpoint which serves product data from the backend, and wire up the PDP to call that endpoint and render based on its response.

The PDP in question is located [in the frontend code](client/src/components/Product.js). Note the shape of the data it expects to receive. Your task is to implement an API endpoint which, when called with a given style ID, serves the data for that style, in an object of the same shape of the mock data included in the frontend. If the style doesn't exist, your endpoint should serve a 404 response.

Once you've implemented that endpoint, you'll find a commented-out example API call in the PDP component's code. Uncomment that call and wire it up to your API endpoint, making sure to pass through the style ID from the page path as the example does.

The definition of "done" for this scenario is being able to change the style ID in the PDP's URL, and have the PDP correctly render data from your API endpoint for that style.

(Extra credit: Also correctly represent a 404 response from the API.)

## In closing

Remember what we said before: beyond the spec, there are no requirements here. Do as much or as little as makes sense to you, in whatever fashion makes sense to you.

If you aren't able to get to "done" in a reasonable amount of time, that's okay! Just open a PR with what you've got so far. This isn't a pop quiz! We're not asking you to build a finished piece of software. We'd just like to see something of how you write code, in order to have a good basis for conversation during your technical interview.

Don't forget to use your resources. Again, this isn't a pop quiz! There are no points off for opening the book, because there are no _points_. Documentation, Stack Overflow, friends and colleagues, IRC randos - anything you'd expect to use in a normal working day, we encourage you to use here, too! This is as much a vital day-to-day skill on our team as in any engineering role, and we'll only be glad to see that you have it.

We're looking forward to hearing from you!
