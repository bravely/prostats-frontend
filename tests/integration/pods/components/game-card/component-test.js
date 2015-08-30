import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('game-card', 'Integration | Component | game card', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{game-card}}`);

  // this is nonsense
  assert.equal(this.$().text().trim(), `vs. \n   -`);

  // Template block usage:
  // this.render(hbs`
  //   {{#game-card}}
  //     template block text
  //   {{/game-card}}
  // `);
  //
  // assert.equal(this.$().text().trim(), 'template block text');
});
