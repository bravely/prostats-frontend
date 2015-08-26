import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'prostats/tests/helpers/start-app';

module('Acceptance | league/show', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /league/show', function(assert) {
  var league = server.create('league');
  // server.createList('tournament', 6, { league_id: league.id });

  visit(`/league/${league.id}`);

  andThen(function() {
    assert.equal(currentURL(), `/league/${league.id}`);
    // assert.equal(find('.tournament').length, 6);
  });
});
