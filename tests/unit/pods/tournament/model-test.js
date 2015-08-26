import { moduleForModel, test } from 'ember-qunit';

moduleForModel('tournament', 'Unit | Model | tournament', {
  // Specify the other units that are required for this test.
  needs: ['model:league', 'model:match']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
