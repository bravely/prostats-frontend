import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../../helpers/setup-mirage-for-integration';

moduleForComponent('play-card', 'Integration | Component | play card', {
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
      player = server.create('player'),
      play = server.create('play', { player: player, team: team });
  this.set('play', play);

  this.render(hbs`{{play-card play=play}}`);

  assert.equal(this.$('.teamAcronym').text().trim(), team.acronym);
  assert.equal(this.$('.name').text().trim(), player.handle);
});
