# ember-aria-accordion
[![Build Status](https://travis-ci.org/rajasegar/ember-aria-accordion.svg?branch=master)](https://travis-ci.org/rajasegar/ember-aria-accordion) 
[![Coverage Status](https://coveralls.io/repos/github/rajasegar/ember-aria-accordion/badge.svg?branch=master)](https://coveralls.io/github/rajasegar/ember-aria-accordion?branch=master)
[![npm version](http://img.shields.io/npm/v/ember-aria-accordion.svg?style=flat)](https://npmjs.org/package/ember-aria-accordion "View this project on npm")
[![dependencies Status](https://david-dm.org/rajasegar/ember-aria-accordion/status.svg)](https://david-dm.org/rajasegar/ember-aria-accordion)
[![devDependencies Status](https://david-dm.org/rajasegar/ember-aria-accordion/dev-status.svg)](https://david-dm.org/rajasegar/ember-aria-accordion?type=dev)
[![EmberObserver](http://emberobserver.com/badges/ember-aria-accordion.svg?branch=master)](http://emberobserver.com/addons/ember-aria-accordion)


An Accordion component in Ember based on the [WAI-ARIA authoring practices](https://www.w3.org/TR/wai-aria-practices/#accordion).

## Demo
[https://rajasegar.github.io/ember-aria-accordion](https://rajasegar.github.io/ember-aria-accordion)

## Usage

```html
<AriaAccordion @active="Billing address" as |a|>
  <a.panel @title="Personal Information">
    <h2>Personal Information</h2>
    <p>This is the accordion content for Personal Information</p>
  </a.panel>
  <a.panel @title="Billing address">
    <h2>Billing Address</h2>
    <p>This is the accordion content for Billing Address</p>
  </a.panel>
  <a.panel @title="Shipping Address">
    <h2>Shipping Address</h2>
    <p>This is the accordion content for Shipping Address</p>
  </a.panel>
</AriaAccordion>

```

## Options
### active
To set the active accordion panel



### toggle
Allow for each toggle to both open and close individually

### multiple
Allow for multiple accordion sections to be expanded at the same time. 
Assumes toggle option is true, otherwise you would not be able to close any of the accordions

## Keyboard Interaction

### Enter or Space:
When focus is on the accordion header for a collapsed panel, expands the associated panel. If the implementation allows only one panel to be expanded, and if another panel is expanded, collapses that panel.

When focus is on the accordion header for an expanded panel, collapses the panel if the implementation supports collapsing. Some implementations require one panel to be expanded at all times and allow only one panel to be expanded; so, they do not support a collapse function.

### Tab: 
Moves focus to the next focusable element; all focusable elements in the accordion are included in the page Tab sequence.

### Shift + Tab: 
Moves focus to the previous focusable element; all focusable elements in the accordion are included in the page Tab sequence.

### Down Arrow : 
If focus is on an accordion header, moves focus to the next accordion header. If focus is on the last accordion header, either does nothing or moves focus to the first accordion header.

### Up Arrow : 
If focus is on an accordion header, moves focus to the previous accordion header. If focus is on the first accordion header, either does nothing or moves focus to the last accordion header.

### Home : 
When focus is on an accordion header, moves focus to the first accordion header.

### End : 
When focus is on an accordion header, moves focus to the last accordion header.




## Installation

* `ember install ember-aria-accordion`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

See the [Contributing](CONTRIBUTING.md) guide for details.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
