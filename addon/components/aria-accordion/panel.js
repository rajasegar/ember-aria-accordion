import Ember from 'ember';
import layout from '../../templates/components/aria-accordion/panel';

export default Ember.Component.extend({
  layout,
  tagName: 'dd',
  classNames: ['Accordion-panel'],
  attributeBindings: ['role', 'label:aria-labelledby', 'hidden'],
  role: "region",
  hidden: true,
  click(e) {
    debugger
    e.preventDefault();
    this.get('on-click')();
  }


});
