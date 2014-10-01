# Exploring Asynchrony Challenge

## Learning Competencies

* Implement synchronous / asynchronous requests in a web application
* Use AJAX actions to change views based on async data
* Use JSON to pass data via an AJAX call and modify the DOM

## Summary

One of the primary challenges when working with AJAX is dealing with the nature
of asynchrony.  Many programs execute _synchronously_, that is program flow can
only occur along one "thread" of execution.  AJAX allows small parallel
"threads" of execution to run in parallel to the "main" thread.  The question
then becomes: "how can these separate threads become re-joined together?"

Exploration of `jQuery.ajax` affords us a chance to explore and understand this
question in the context of web applications.

## Release 0: Do you remember how to $.ajax?

* Start the server using `bundle exec thin start`
* Demonstrate the server's function by visiting http://localhost:3000/

Demonstrate your understanding of jQuery's `$.ajax` implementation by querying
the following `GET` routes and appending the results' `value` key into the DOM.
You should end up with the numbers `2` and `5` being displayed in the body of
the document.

* `/first`
* `/second`

## Release 1: Get it working

Write an implementation conforming to the following specifications:

1.  Query `/first.json` and retreive the `value` attribute from the returned
JSON object
1.  Query `/second.json` and retreive the `value` attribute from the returned
JSON object
1.  Sum these two results and append the sum to the body

To accomplish this release you will need to consider the problems associated
with asynchronous work: chiefly that code will continue executing _while_
network request and response and may reach a point where data, which has not
yet been returned it needed.

## Release 2: No nested callbacks

The `$.ajax` object is an implementation of jQuery's [Deferred
interface][deferred].  When working with requests that are asynchronous a
_promise_ is a way to say, "I'm working on it, keep on going, I'll let you know
when I _resolve_."

If your release 1 implementation uses nested callbacks i.e. the success
callback of one call launches the next call, try converting your solution to
using `Deferred`s.  You may want to use the `$.when` and `$.then` methods.

## Optimize your learning

## Release 3: Async Master

An important quality of good programmers is to take a specific implementation
and learn the conceptual framework beneath the specific implementation so that
they can apply it in new and novel ways.

In this case, `$.ajax` is a specific implementation of `$.Deferred`.  Try
writing your own implementation of Deferred behavior using `setTimeout` to put
something in an asynchronous loop.  Then try to do something with the result.

It's often fun to try to make these "toy" apps with silly jokes, meme / movie
/ video game / breakfast cereal references.

Check out `public/release_3_optimize_your_learning.js` to see what an
exploration might look like.

## Release 4: How Does Asynchrony Work in a Browser"

Enjoy Philip Roberts' explanation of the internal callback mechanisms of
JavaScript.  It's fantastic.  [http://vimeo.com/96425312][call_stack]

## Resources

* [jQuery Deferred][deferred]

[deferred]: http://api.jquery.com/category/deferred-object/
[call_stack]: http://vimeo.com/96425312
