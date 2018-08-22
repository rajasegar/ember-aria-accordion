# ember-aria-accordion
[![Build Status](https://travis-ci.org/rajasegar/ember-aria-accordion.svg?branch=master)](https://travis-ci.org/rajasegar/ember-aria-accordion) 
[![Coverage Status](https://coveralls.io/repos/github/rajasegar/ember-aria-accordion/badge.svg?branch=master)](https://coveralls.io/github/rajasegar/ember-aria-accordion?branch=master)
[![npm version](http://img.shields.io/npm/v/ember-aria-accordion.svg?style=flat)](https://npmjs.org/package/ember-aria-accordion "View this project on npm")
[![dependencies Status](https://david-dm.org/rajasegar/ember-aria-accordion/status.svg)](https://david-dm.org/rajasegar/ember-aria-accordion)
[![devDependencies Status](https://david-dm.org/rajasegar/ember-aria-accordion/dev-status.svg)](https://david-dm.org/rajasegar/ember-aria-accordion?type=dev)
[![EmberObserver](http://emberobserver.com/badges/ember-aria-accordion.svg?branch=master)](http://emberobserver.com/addons/ember-aria-accordion)


An Accordion component in Ember based on the WAI-ARIA authoring practices.

## Demo
[https://rajasegar.github.io/ember-aria-accordion](https://rajasegar.github.io/ember-aria-accordion)

## Usage

```hbs
  {{#aria-accordion active="Billing address"  as |a|}}
    {{#a.panel title="Personal Information" }}
      <h2>Personal Information</h2>
      <p>This is the accordion content for Personal Information</p>
    {{/a.panel}}
    {{#a.panel title="Billing address" }}
      <h2>Billing Address</h2>
      <p>This is the accordion content for Billing Address</p>
    {{/a.panel}}
    {{#a.panel title="Shipping Address" }}
      <h2>Shipping Address</h2>
      <p>This is the accordion content for Shipping Address</p>
    {{/a.panel}}
  {{/aria-accordion}}

```

## Options
### active
To set the active accordion panel

### toggle
Allow for each toggle to both open and close individually

### multiple
Allow for multiple accordion sections to be expanded at the same time. 
Assumes toggle option is true, otherwise you would not be able to close any of the accordions


## Installation

* `git clone <repository-url>` this repository
* `cd ember-aria-accordion`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
