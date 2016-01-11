import Ember from 'ember';
import layout from '../templates/components/pikaday-with-time';
import moment from 'moment';

let {set, get} = Ember;

export default Ember.Component.extend({
  layout,

  binding: null,

  date: Ember.computed('startValue', {
    get() {
      return moment(this.getAttr('startValue'));
    },

    set(key, value) {
      if (!value) {
        return;
      }

      let newTime = moment(value);

      let composedDate = moment(get(this, 'binding'))
        .year(newTime.year())
        .dayOfYear(newTime.dayOfYear());

      set(this, 'binding', composedDate);
    },
  }),
});
