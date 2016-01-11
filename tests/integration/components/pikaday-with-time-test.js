import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pikaday-with-time', 'Integration | Component | pikaday with time', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{pikaday-with-time}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#pikaday-with-time}}
      template block text
    {{/pikaday-with-time}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
