import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../../helpers/setup-mirage-for-integration';

moduleForComponent('game-card', 'Integration | Component | game card', {
  integration: true,
  setup: function() {
    startMirage(this.container);
  }
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  // var game = server.create('game');
  // this.set('game', game);

  this.render(hbs`{{game-card}}`);

  // this is nonsense
  assert.equal(this.$('.youtubeUrl').text(), 'No Youtube Link');

  // Template block usage:
  // this.render(hbs`
  //   {{#game-card}}
  //     template block text
  //   {{/game-card}}
  // `);
  //
  // assert.equal(this.$().text().trim(), 'template block text');
});
