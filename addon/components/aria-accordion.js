import Component from '@ember/component';
import layout from '../templates/components/aria-accordion';

export default Component.extend({
  layout,
  tagName: '',
  refresh: false,
  init() {
    this._super(...arguments);
    let temp = new Set(); // eslint-disable-line
    let active = this.get('active');
    temp.add(active);
    this.set('activePanels', temp);
  },
  actions: {
    selectAccordion(e) {
      if(this.get('multiple')) {
        let _activePanels = this.get('activePanels');
        // let _active = this.get('active');
        if(_activePanels.has(e) && this.get('toggle')) {
          _activePanels.delete(e);
        } else {
          _activePanels.add(e);
        }
        this.set('activePanels', _activePanels);
      } else {
        this.set('active', e);
      }
      if(this.get('toggle') || this.get('multiple')) {
        this.toggleProperty('refresh');
      }
    }
  }
});
