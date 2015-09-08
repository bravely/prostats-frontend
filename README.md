# Prostats

The frontend application for Prostats, powered by a JSONAPI backend.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

To use this application properly, you need a data-loaded backend. If
you've processed some Leagues, then start your server, and follow
it up with:

* `ember server --proxy http://localhost:3000`

Then feel free to visit it at http://localhost:4200.


### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Notes

Currently many Route and Integration tests are fairly hollow-
[Ember CLI Mirage](https://github.com/samselikoff/ember-cli-mirage) is currently undergoing a pretty large
changeover to support JSONAPI serialization, and as I'm trying
to move this forward as fast as possible, I'm avoiding
duplicating work. The current limitations make it
near-impossible to implement [Compound Documents](http://jsonapi.org/format/#document-compound-documents).
