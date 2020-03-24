import Component from '@ember/component';
import layout from '../templates/components/accordion-panel';
import { computed, action } from '@ember/object';

export default Component.extend({
  layout,
  tagName: '',
  accordionId: computed('title', function() {
    return `accordion-${this.get('title').replace(' ','')}`;
  }),
  sectId: computed('title', function() {
    return `sect-${this.get('title').replace(' ','')}`;
  }),
  ariaExpanded: computed('active', 'title', function() {
    let _active = this.get('active');
    let _title = this.get('title');
    return _active === _title;
  }),
    
  hidden: computed.not('ariaExpanded')

});
