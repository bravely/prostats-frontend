import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../../helpers/setup-mirage-for-integration';

moduleForComponent('player-card', 'Integration | Component | player card', {
  integration: true,
  setup: function() {
    startMirage(this.container);
  }
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  var team = server.create('team'),
      player = server.create('player', { team: team });
  this.set('player', player);

  this.render(hbs`{{player-card player=player}}`);

  assert.equal(this.$('.handle').text().trim(), `"${player.handle}"`);
  assert.equal(this.$('.position').text().trim(), player.position);
});
