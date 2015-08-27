import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'prostats/tests/helpers/start-app';

module('Acceptance | tournament/show', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /tournament/show', function(assert) {
  var tournament = server.create('tournament');

  visit(`/tournament/${tournament.id}`);

  andThen(function() {
    assert.equal(currentURL(), `/tournament/${tournament.id}`);
  });
});
