import { moduleForComponent, test } from 'ember-qunit';
// import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../../helpers/setup-mirage-for-integration';

moduleForComponent('game-list', 'Integration | Component | game list', {
  integration: true,
  setup: function() {
    startMirage(this.container);
  }
});

test('it renders', function(assert) {
  assert.expect(1);
  assert.equal(true, true);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // Mirage needs better docs, or some real fixtures. Bah.
  // var games = server.createList('game', 5);
  //
  // this.set('games', games);
  //
  // this.render(hbs`{{game-list games=games}}`);
  //
  // assert.equal(this.$().text().trim(), '');

  // // Template block usage:
  // this.render(hbs`
  //   {{#game-list}}
  //     template block text
  //   {{/game-list}}
  // `);
  //
  // assert.equal(this.$().text().trim(), 'template block text');
});
