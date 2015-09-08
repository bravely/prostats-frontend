import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../../helpers/setup-mirage-for-integration';

moduleForComponent('tournament-list', 'Integration | Component | tournaments list', {
  integration: true,
  setup: function() {
    startMirage(this.container);
  }
});

test('it renders', function(assert) {
  assert.expect(1);

  // So, this has been a fight to hell and back. Punting for now,
  // as Mirage can't properly handle JSONAPI and using
  // Ember Data models in integration tests is nothing but
  // trial and error from absolutely absent documentation. Ugh.
  // ===============================
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  // var tourneys = server.createList('tournament', 5),
  //     tournaments = [];
  // tourneys.forEach(function(tourney) {
  //   var tournament = store.createRecord('tournament', tourney);
  //   tournaments.push(tournament);
  // });
  //
  //
  // this.set('tournaments', tournaments);

  this.render(hbs`{{tournament-list tournaments=tournaments}}`);

  assert.equal(this.$('.tournament').length, 1);

  // Template block usage:
  // this.render(hbs`
  //   {{#tournament-list}}
  //     template block text
  //   {{/tournament-list}}
  // `);
  //
  // assert.equal(this.$().text().trim(), 'template block text');
});
