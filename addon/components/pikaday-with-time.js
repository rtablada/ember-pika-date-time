import Ember from 'ember';
import layout from '../templates/components/pikaday-with-time';
import moment from 'moment';

let {set, get} = Ember;

export default Ember.Component.extend({
  layout,
  format: 'DD.MM.YYYY',

  binding: null,

  date: Ember.computed('startValue', {
    get() {
      return moment(this.getAttr('startValue'))
        .format(this.get('format'));
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

  time: Ember.computed('startValue', {
    get() {
      let startValue = this.getAttr('startValue');

      if (startValue) {
        return moment(this.getAttr('startValue'))
        .format('HH:mm');
      }
    },

    set(key, value) {
      if (!value) {
        return;
      }

      let newTime = moment(value, 'HH:mm');

      let composedDate = moment(get(this, 'binding'))
        .hour(newTime.hour())
        .minute(newTime.minute())
        .second(0);

      set(this, 'binding', composedDate);
    },
  }),
});
