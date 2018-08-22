import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | accordion-panel', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function() {
    this.set('selectCallback', function(e) {
      this.set('active', e);
    });

    await render(hbs`{{#accordion-panel title='Hello World' select=(action selectCallback)}}Hello World{{/accordion-panel}}`);

  });

  test('should have a dt element', function(assert) {
    assert.ok(find('dt'));
  });

  test('should have a dt element with role=heading', function(assert) {
    assert.ok(find('dt[role="heading"]'));
  });

  test('should have a dt element with aria-level=3', function(assert) {
    assert.ok(find('dt[aria-level="3"]'));
  });


  test('should have a button element', function(assert) {
    assert.ok(find('button'));
  });

  test('should have a button element with class=accordion-trigger', function(assert) {
    assert.ok(find('button[class="accordion-trigger"]'));
  });

  test('should have a button element with type=button', function(assert) {
    assert.ok(find('button[type="button"]'));
  });

  test('should have a button element with aria-expanded=false', function(assert) {
    assert.ok(find('button[aria-expanded="false"]'));
  });

  skip('should have a button element with aria-expanded=true', function(assert) {
    this.set('active', 'Hello World');
    assert.ok(find('button[aria-expanded="true"]'));
  });


  test('should have a button element with aria-controls=sectionId', function(assert) {
    assert.ok(find('button[aria-controls="sect-HelloWorld"]'));
  });

  test('should have a button element with id=accordionId', function(assert) {
    assert.ok(find('button[id="accordion-HelloWorld"]'));
  });

  test('should have a span element with class=accordion-title', function(assert) {
    assert.ok(find('span[class="accordion-title"]'));
  });

  test('should have a span element with title', function(assert) {
    let titleEl = find('span[class="accordion-title"]');
    assert.equal(titleEl.textContent.trim(), 'Hello World');
  });


  test('should have a span element with class=accordion-icon', function(assert) {
    assert.ok(find('span[class="accordion-icon"]'));
  });

  test('should have a dd element with id=sectId', function(assert) {
    assert.ok(find('dd[id="sect-HelloWorld"]'));
  });

  test('should have a dd element with role=region', function(assert) {
    assert.ok(find('dd[role="region"]'));
  });

  test('should have a dd element with aria-labelledby=accordionId', function(assert) {
    assert.ok(find('dd[aria-labelledby="accordion-HelloWorld"]'));
  });

  test('should have a dd element with class=accordion-panel', function(assert) {
    assert.ok(find('dd[class="accordion-panel"]'));
  });

  test('should have a dd element with yielded content', function(assert) {
    let panelEl = find('dd[class="accordion-panel"]');
    assert.equal(panelEl.textContent.trim(), "Hello World");
  });
});
