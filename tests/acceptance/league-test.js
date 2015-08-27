import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'prostats/tests/helpers/start-app';

module('Acceptance | league', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /league', function(assert) {
  server.createList('league', 3);

  visit('/league');

  andThen(function() {
    assert.equal(currentURL(), '/league');
    assert.equal(find('.league').length, 3);
  });
});
