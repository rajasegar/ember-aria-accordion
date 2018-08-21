import Ember from 'ember';
import layout from '../../templates/components/aria-accordion/header';

export default Ember.Component.extend({
  layout,
  tagName: 'dt',
  attributeBindings: ['role', 'ariaLevel:aria-level'],
  role: 'heading',
  ariaLevel: 3
});
