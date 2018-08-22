import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find, findAll, click, render } from '@ember/test-helpers';


module('aria-accordion', 'Integration | Component | aria accordion', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function() {
    this.set('active', 'Home');

    await render(hbs`
    {{#aria-accordion active=active  as |a|}}
    {{#a.panel title="Personal Information" }}
      <p> Personal Information</p>
    {{/a.panel}}
    {{#a.panel title="Home" }}
      <p> Home </p>
    {{/a.panel}}
    {{#a.panel title="Settings" }}
      <p> Settings </p>
    {{/a.panel}}
    {{/aria-accordion}}
    `);
  });

  test('should have a dl element with class=accordion', function(assert) {
    assert.ok(find('dl.accordion'));
  });

  test('should have a dl element with role=presentation', function(assert) {
    assert.ok(find('dl[role="presentation"]'));
  });

  test('should have 3 dd elements', function(assert) {
    assert.equal(findAll('dd').length, 3);
  });

  test('should have 3 dt elements', function(assert) {
    assert.equal(findAll('dt').length, 3);
  });

  test('should have only one active panel', function(assert) {
    assert.equal(findAll('button[aria-expanded="true"]').length, 1);
    assert.equal(this.get('active'), 'Home');
  });

  test('should activate the appropriate panel', async function(assert) {
    await click('button#accordion-Settings');
    assert.equal(this.get('active'), 'Settings');
  });

});

module('aria-accordion with toggle=true', 'Integration | Component | aria accordion', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function() {
    this.set('active', 'Home');

    await render(hbs`
    {{#aria-accordion active=active  toggle=true as |a|}}
    {{#a.panel title="Personal Information" }}
      <p> Personal Information</p>
    {{/a.panel}}
    {{#a.panel title="Home" }}
      <p> Home </p>
    {{/a.panel}}
    {{#a.panel title="Settings" }}
      <p> Settings </p>
    {{/a.panel}}
    {{/aria-accordion}}
    `);
  });

  test('should toggle the appropriate panel', async function(assert) {
    assert.equal(findAll('button[aria-expanded="true"]').length, 1);
    await click('button#accordion-Home');
    assert.equal(findAll('button[aria-expanded="true"]').length, 0);
  });


});

module('aria-accordion with multiple=true', 'Integration | Component | aria accordion', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function() {
    this.set('active', 'Home');

    // TODO: Also pass toggle=true and check
    await render(hbs`
    {{#aria-accordion active=active  multiple=true as |a|}}
    {{#a.panel title="Personal Information" }}
      <p> Personal Information</p>
    {{/a.panel}}
    {{#a.panel title="Home" }}
      <p> Home </p>
    {{/a.panel}}
    {{#a.panel title="Settings" }}
      <p> Settings </p>
    {{/a.panel}}
    {{/aria-accordion}}
    `);
  });

  test('should activate multiple panels', async function(assert) {
    assert.equal(findAll('button[aria-expanded="true"]').length, 1);
    await click('button#accordion-Settings');
    assert.equal(findAll('button[aria-expanded="true"]').length, 2);
  });

  // TODO: Need to check these cases
  skip('should toggle/activate multiple panels', async function(assert) {
    assert.equal(findAll('button[aria-expanded="true"]').length, 1);
    await click('button#accordion-Settings');
    assert.equal(findAll('button[aria-expanded="true"]').length, 2);
    await click('button#accordion-Settings');
    assert.equal(findAll('button[aria-expanded="true"]').length, 1);
  });
});
