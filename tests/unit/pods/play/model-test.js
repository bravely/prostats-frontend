import { moduleForModel, test } from 'ember-qunit';

moduleForModel('play', 'Unit | Model | play', {
  // Specify the other units that are required for this test.
  needs: ['model:player', 'model:game', 'model:team']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
