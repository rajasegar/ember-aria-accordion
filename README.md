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
  {{#aria-accordion active="Billing address" toggle=true multiple=true as |a|}}
    {{#a.panel title="Personal Information" }}
      <!-- Variable content within section, may include any type of markup or interactive widgets. -->
      <fieldset>
        <p>
          <label for="cufc1">
            Name
            <span aria-hidden="true">
              *
            </span>
            :
          </label>
          <input type="text"
                 value=""
                 name="Name"
                 id="cufc1"
                 class="required"
                 aria-required="true">
        </p>
        <p>
          <label for="cufc2">
            Email
            <span aria-hidden="true">
              *
            </span>
            :
          </label>
          <input type="text"
                 value=""
                 name="Email"
                 id="cufc2"
                 aria-required="true">
        </p>
        <p>
          <label for="cufc3">
            Phone:
          </label>
          <input type="text"
                 value=""
                 name="Phone"
                 id="cufc3">
        </p>
        <p>
          <label for="cufc4">
            Extension:
          </label>
          <input type="text"
                 value=""
                 name="Ext"
                 id="cufc4">
        </p>
        <p>
          <label for="cufc5">
            Country:
          </label>
          <input type="text"
                 value=""
                 name="Country"
                 id="cufc5">
        </p>
        <p>
          <label for="cufc6">
            City/Province:
          </label>
          <input type="text"
                 value=""
                 name="City_Province"
                 id="cufc6">
        </p>
      </fieldset>
    {{/a.panel}}
    {{#a.panel title="Billing address" }}


      <fieldset>
        <p>
          <label for="b-add1">
            Address 1:
          </label>
          <input type="text"
                 name="b-add1"
                 id="b-add1">
        </p>
        <p>
          <label for="b-add2">
            Address 2:
          </label>
          <input type="text"
                 name="b-add2"
                 id="b-add2">
        </p>
        <p>
          <label for="b-city">
            City:
          </label>
          <input type="text"
                 name="b-city"
                 id="b-city">
        </p>
        <p>
          <label for="b-state">
            State:
          </label>
          <input type="text"
                 name="b-state"
                 id="b-state">
        </p>
        <p>
          <label for="b-zip">
            Zip Code:
          </label>
          <input type="text"
                 name="b-zip"
                 id="b-zip">
        </p>
      </fieldset>
    {{/a.panel}}
    {{#a.panel title="Shipping Address" }}


      <fieldset>
        <p>
          <label for="m-add1">
            Address 1:
          </label>
          <input type="text"
                 name="m-add1"
                 id="m-add1">
        </p>
        <p>
          <label for="m-add2">
            Address 2:
          </label>
          <input type="text"
                 name="m-add2"
                 id="m-add2">
        </p>
        <p>
          <label for="m-city">
            City:
          </label>
          <input type="text"
                 name="m-city"
                 id="m-city">
        </p>
        <p>
          <label for="m-state">
            State:
          </label>
          <input type="text"
                 name="m-state"
                 id="m-state">
        </p>
        <p>
          <label for="m-zip">
            Zip Code:
          </label>
          <input type="text"
                 name="m-zip"
                 id="m-zip">
        </p>
      </fieldset>
    {{/a.panel}}
  {{/aria-accordion}}


```

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
