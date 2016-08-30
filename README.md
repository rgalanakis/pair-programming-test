Hello!
This repo contains a handful of different pair programming exercises
we use for interviews. Your interview will probably only involve one,
and if you're reading this you should know which one.

The goal of these exercises is to gauge where you're at technically,
and see how you perform in an environment similar to what you'll experience at Cozy.
We want to make sure you can be successful and happy in a highly collaborative environment;
we don't particularly care if you know obscure features of RSpec
or know everything about promises.

Ideally we are working on your machine,
either remotely or at the Cozy office.
Programming is much easier when you're using familiar equipment and tools!
Instructions for remote pairing will be sent out ahead of the interview.

The instructions for getting each exercise up and running are in this README.
When possible, please make sure you go through those steps beforehand,
and tell your interviewer if you run into any problems.

The actual steps/requirements of the exercise will be discussed during the interview.


Weather Service
===

This exercise involves writing a client to render weather information from
a server. We will refactor and improve the client.

The client looks like this to start with:

![weather service screenshot](https://www.dropbox.com/s/tioowiekqy8dq4f/Screenshot%202016-08-28%2022.15.11.png?dl=1)

Beautiful, right? It's even worse when you try to use it!

The iterations will be mostly driven by what you want to do
and what you're comfortable with,
but there will be some things I'll cover with everyone.

Concepts
=====

It will be helpful, but not necessary, to review the following concepts/libraries:

- The basics of the
  [fetch](https://davidwalsh.name/fetch) API for AJAX.
  We actually use `qajax` for AJAX but `fetch` is a more useful thing to know.
  You don't need to know the details, but you should understand the concepts
  of how AJAX works, and also how to handle promises (see below).
- How [promises](https://davidwalsh.name/promises) work,
  especially success and error handling and result propagation.
  We use `Q` for promises at Cozy but this exercises uses
  what's available natively in the browser.
- Data binding through [KnockoutJS](http://knockoutjs.com/documentation/introduction.html).
  You can probably figure this out from the code sample that's already in `main.js`,
  but looking over a basic KnockoutJS tutorial can't hurt.
  In particular, the concepts of observables and computeds are important.
- We use [Lodash](https://lodash.com/docs) heavily.
  If you know it, great, if you don't, that's ok too,
  we'll figure out what we need as we go.
- We also use [kompose](https://github.com/pietvanzoen/knockout-kompose)
  to tie together Knockout and Lodash, but unless you're already very interested
  in functional programming, it's not super important to understand Kompose.
- Module loading through [RequireJS](https://requirejs.org),
  but it's not really important to understand it for this exercise.

Again, you won't be "quizzed" on any of these topics;
these are just things that we'll use to varying degrees
as we write our code.

Instructions
=====

First we need to get the server running.
Ensure you have a relatively current version of Node and NPM installed.
Your interviewer will send you an API key for OpenWeatherMap.org.
We'll need to install dependencies, export the key, and start the server:

```
$ cd weather-service-node
$ npm install
$ export OPENWEATHER_API_KEY=YOUR_KEY
$ node index.js
Serving on http://localhost:3000
```

In another shell, ensure the server is working:

```
$ curl 'http://localhost:3000/weather?city=Portland&country=US'
{"city":"Portland","country":"US","temp":26.480000000000018,"tempMin":25,"tempMax":28.33000000000004,"weather":"Clouds","windSpeed":3.1,"windDirection":20}
```

The client is a static client hosted in another directory.
All you need to do is run an HTTP server:

```
$ cd weather-client
$ python -m SimpleHTTPServer 1025
Serving HTTP on 0.0.0.0 port 1025 ...
```

Finally, open a browser to `http://localhost:1025`.
Press the button and ensure everything is working
(if you don't have an API key, you'll get a 500 error, that's ok).

Most of our work will be in the `index.html`, `main.js`, and `main.css` files.


Ruby TDD
===

For this exercise, we'll do some simple Test Driven Development
using Ruby.
The specific exercise will depend on your experience and
the role you're applying for.

There are no libraries other than the Ruby standard library and RSpec required.
The repo contains some placeholder code to demonstrate specs working.

Instructions
=====

Make sure you have Ruby 2.2+ and rspec 3.0+ installed (we're using Ruby 2.2 and RSpec 3.2).
You can use rbenv/RVM and bundler for this, or install into system Ruby, whatever you want.
There are a few helper files already in the repo to make using a version manager and bundler easier for you.
Ideally it's just a `bundle install` in the `ruby-tdd` directory.

Logic goes in `app.rb` and specs go in `specs.rb`.

Once you're all set up, run the specs to make sure things are working:

```
$ cd ruby-tdd/
$ rspec specs.rb 

the programming test
  works on my machine!

Finished in 0.00084 seconds (files took 0.11766 seconds to load)
1 example, 0 failures
```

The existing code in `app.rb` and `specs.rb` can be cleared out.


JavaScript TDD
===

For this exercise, we'll do some simple Test Driven Development
using JavaScript (node).

The specific exercise will depend on your experience and
the role you're applying for.

Lodash is available, but it's not necessary to use.

Instructions
=====

Just `npm install` and you should be on your way.

```
$ cd js-tdd/
$ npm install
js-tdd@0.0.1 /Users/rgalanakis/dev/pair-programming-test/js-tdd
# and lots of other output!
$ npm test

> js-tdd@0.0.1 test /Users/rgalanakis/dev/pair-programming-test/js-tdd
> jasmine

Started
.


1 spec, 0 failures
Finished in 0.006 seconds
```

Make sure you get the "1 spec" output, if you see "0 spec",
something is wrong.

All of our code will go into `js-tdd/spec/spec.js`.
