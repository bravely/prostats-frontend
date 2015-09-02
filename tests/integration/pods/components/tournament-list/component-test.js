import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tournament-list', 'Integration | Component | tournaments list', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tournament-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  // this.render(hbs`
  //   {{#tournament-list}}
  //     template block text
  //   {{/tournament-list}}
  // `);
  //
  // assert.equal(this.$().text().trim(), 'template block text');
});
