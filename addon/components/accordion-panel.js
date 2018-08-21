import Component from '@ember/component';
import layout from '../templates/components/accordion-panel';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: '',
  accordionId: computed('title', function() {
    return `accordion-${this.get('title').replace(' ','')}`;
  }),
  sectId: computed('title', function() {
    return `sect-${this.get('title').replace(' ','')}`;
  }),
  ariaExpanded: computed('active', 'title', 'refresh', function() {
    let _allowToggle = this.get('toggle');
    let _active = this.get('active');
    let _title = this.get('title');
    let _accordionId = this.get('accordionId');
    let buttonEl = document.getElementById(_accordionId);
    let isExpanded = false;
    if(buttonEl) {
      isExpanded = buttonEl.getAttribute('aria-expanded') === "true" ? true : false;
    }
    if(_allowToggle && _active == _title) {
      return !isExpanded;
    } else {
      if(this.get('multiple')) {
        return this.get('activePanels').has(_title);
      } else {
        return _active == _title;
      }
    }
  }),
  hidden: computed.not('ariaExpanded')
});
