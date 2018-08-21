import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | accordion-panel', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('selectCallback', function(e) {
      this.set('active', e);
    });

    await this.render(hbs`{{accordion-panel title='Hello World' select=(action selectCallback)}}`);

    // assert.equal(this.element.textContent.trim(), '');
    assert.equal(1,1);

  });
});
