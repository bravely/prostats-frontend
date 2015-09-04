import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../../helpers/setup-mirage-for-integration';

moduleForComponent('player-games-list', 'Integration | Component | player games list', {
  integration: true,
  setup: function() {
    startMirage(this.container);
  }
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  var games = server.createList('game', 10);
  this.set('games', games);

  this.render(hbs`{{player-games-list games=games}}`);

  assert.equal(this.$('.game').length, 10);
});
