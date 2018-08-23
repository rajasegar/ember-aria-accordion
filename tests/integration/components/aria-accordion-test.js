import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find, findAll, focus,  click, render, triggerKeyEvent } from '@ember/test-helpers';

const KEY_PAGE_UP = 33;
const KEY_PAGE_DOWN = 34;
const KEY_END = 35;
const KEY_HOME = 36;
const KEY_UP_ARROW = 38;
const KEY_DOWN_ARROW = 40;


module('aria-accordion', 'Integration | Component | aria accordion', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function() {
    this.set('active', 'Home');

    await render(hbs`
    {{#aria-accordion active=active  as |a|}}
    {{#a.panel title="Profile" }}
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

  test('should focus next accordion on DOWN-ARROW', async function(assert) {
    await focus('button#accordion-Profile');
    await triggerKeyEvent('button#accordion-Profile', 'keydown', KEY_DOWN_ARROW );
    assert.equal(document.activeElement.id, "accordion-Home");
  });

  test('should focus next accordion on PAGE-DOWN', async function(assert) {
    await focus('button#accordion-Profile');
    await triggerKeyEvent('button#accordion-Profile', 'keydown', KEY_PAGE_DOWN );
    assert.equal(document.activeElement.id, "accordion-Home");
  });

  test('should focus previous accordion on UP-ARROW', async function(assert) {
    await focus('button#accordion-Home');
    await triggerKeyEvent('button#accordion-Home', 'keydown', KEY_UP_ARROW );
    assert.equal(document.activeElement.id, "accordion-Profile");
  });

  test('should focus previous accordion on PAGE-UP', async function(assert) {
    await focus('button#accordion-Home');
    await triggerKeyEvent('button#accordion-Home', 'keydown', KEY_PAGE_UP );
    assert.equal(document.activeElement.id, "accordion-Profile");
  });

  test('should focus first accordion on HOME', async function(assert) {
    await focus('button#accordion-Home');
    await triggerKeyEvent('button#accordion-Home', 'keydown', KEY_HOME );
    assert.equal(document.activeElement.id, "accordion-Profile");
  });

  test('should focus last accordion on END', async function(assert) {
    await focus('button#accordion-Profile');
    await triggerKeyEvent('button#accordion-Profile', 'keydown', KEY_END );
    assert.equal(document.activeElement.id, "accordion-Settings");
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
