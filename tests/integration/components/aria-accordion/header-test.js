import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('aria-accordion/header', 'Integration | Component | aria accordion/header', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{aria-accordion/header}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#aria-accordion/header}}
      template block text
    {{/aria-accordion/header}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
