import Component from '@ember/component';
import layout from '../templates/components/aria-accordion';
import { action } from '@ember/object';

const KEY_PAGE_UP = 33;
const KEY_PAGE_DOWN = 34;
const KEY_END = 35;
const KEY_HOME = 36;
const KEY_UP_ARROW = 38;
const KEY_DOWN_ARROW = 40;


export default Component.extend({
  layout,
  tagName: 'dl',
  classNames: ['accordion'],
  attributeBindings: ['role'],
  role: 'presentation',
  refresh: false,
  init() {
    this._super(...arguments);
    let temp = new Set(); // eslint-disable-line
    let active = this.get('active');
    temp.add(active);
    this.set('activePanels', temp);
  },

  @action
  selectAccordion(e) {
    debugger;
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
  },

  @action
  focusAccordion(e) {
    let triggers = [].slice.call(this.element.querySelectorAll('.accordion-trigger'));
    let key = e.keyCode;
    let index, direction, length, newIndex;
    switch(key) {
    case KEY_DOWN_ARROW:
    case KEY_UP_ARROW:
    case KEY_PAGE_DOWN:
    case KEY_PAGE_UP:
      index = triggers.indexOf(e.target);
      direction = (key === KEY_DOWN_ARROW || key === KEY_PAGE_DOWN) ? 1 : -1;
      length = triggers.length;
      newIndex = (index + length + direction) % length;
      triggers[newIndex].focus();
      e.preventDefault();
      break;
    case KEY_END:
      triggers[triggers.length - 1].focus();
      e.preventDefault();
      break;
    case KEY_HOME:
      triggers[0].focus();
      e.preventDefault();
      break;
    default:
      break;
    }
  }
});
