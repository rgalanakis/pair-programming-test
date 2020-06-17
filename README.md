Hello!
This repo contains a handful of different pair programming exercises
we use for interviews. Your interview will probably only involve one,
and if you're reading this you should know which one.

The goal of these exercises is to gauge where you're at technically,
and see how you perform in an environment similar to what you'll experience at Lithic.
We want to make sure you can be successful and happy in a highly collaborative environment;
we don't particularly care if you know obscure features of RSpec
or know everything about promises.

The instructions for getting each exercise up and running are in this README.
Please make sure you go through those steps beforehand,
and tell your interviewer ahead of time if you run into any problems.
The goal is to be able to start programming without having to futz around with environment setup.
We want you to be comfortable, working with languages and tools familiar to you.

Instructions for remote pairing will be sent out ahead of the interview.

The actual steps/requirements of the exercise will be discussed during the interview.

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

First, install `rbenv`, which makes it easy to manage Ruby versions.
(You can ignore this step if you already know your way around Ruby).

```
$ cd ruby-tdd/
$ rbenv install
$ gem install bundler
$ bundle install
```

Once you're all set up, run the specs to make sure things are working:

```
$ bundle exec rspec specs.rb

the programming test
  works on my machine!

Finished in 0.00084 seconds (files took 0.11766 seconds to load)
1 example, 0 failures
```


JavaScript TDD
===

For this exercise, we'll do some simple Test Driven Development
using JavaScript via NodeJS.

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

Golang TDD
===

For this exercise, we'll do some simple Test Driven Development
using Go.

The specific exercise will depend on your experience and
the role you're applying for.

Instructions
=====

You will need Go installed (via Homebrew or whatever else).
Then:

```
$ cd go-tdd
$ make test
ok  	github.com/rgalanakis/pair-programming-test	0.251s
```

All of our code will go into `go-tdd/main.go` and `go-tdd/main_test.go`.

The repo is set up with Ginkgo and Gomega, two "BDD-style" testing libraries.
You can use standard `testing.T`-based tests if you'd like to instead,
though we encourage you to try the BDD style if you're not used to it.

C++ TDD
===

We aren't using a test framework for this, for the sake fo simplicity.
Instead, we'll use the boilerplate in `main.cpp` to run tests,
and modify `cpp-tdd/Makefile` to add test cases.

To make sure this works:

```
$ cd cpp-tdd/
$ make run 
Input: Hello Universe!, Result: Yo!, Expected: Yo!
pass
Input: Hello Universe!, Result: Yo!, Expected: Hi!
FAIL
```

If that fails to compile, modify the `Makefile` to use whatever compiler you are using.  

Weather Service
===

**This assignment is deprecated and needs to be updated to use modern frontend stacks.**

This exercise involves writing a client to render weather information from
a server. We will refactor and improve the client.

The client looks like this to start with:

![weather service screenshot](https://www.dropbox.com/s/tioowiekqy8dq4f/Screenshot%202016-08-28%2022.15.11.png?dl=1)

Beautiful, right? It's even worse when you try to use it!

I'll start by guiding the work with a few low hanging improvements.
After that, changes will be open ended and we can spend time working
on improvements that are most interesting to you.

Concepts
=====

It will be helpful, but not necessary, to review the following concepts/libraries:

- The basics of the
  [fetch](https://davidwalsh.name/fetch) API for AJAX.
  You don't need to know the details, but you should understand the concepts
  of how AJAX works, and also how to handle promises (see below).
- How [promises](https://davidwalsh.name/promises) work,
  especially success and error handling and result propagation.
- We use [Lodash](https://lodash.com/docs) heavily.
  If you know it, great, if you don't, that's ok too,
  we'll figure out what we need as we go.

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
