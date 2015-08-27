import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'prostats/tests/helpers/start-app';

module('Acceptance | match/show', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /match/show', function(assert) {
  var match = server.create('match');

  visit(`/match/${match.id}`);

  andThen(function() {
    assert.equal(currentURL(), `/match/${match.id}`);
  });
});
