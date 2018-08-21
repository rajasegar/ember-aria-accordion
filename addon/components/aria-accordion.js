import Ember from 'ember';
import layout from '../templates/components/aria-accordion';

export default Ember.Component.extend({
  layout,
  tagName: 'dl',
  classNames: ['Accordion'],
  attributeBindings: ['role'],
  role: 'presentation',
  name: Ember.computed.oneWay('elementId')
});
