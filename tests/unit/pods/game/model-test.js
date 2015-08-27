import { moduleForModel, test } from 'ember-qunit';

moduleForModel('game', 'Unit | Model | game', {
  // Specify the other units that are required for this test.
  needs: ['model:match', 'model:team', 'model:player', 'model:play']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
