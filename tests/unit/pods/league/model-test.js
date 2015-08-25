import { moduleForModel, test } from 'ember-qunit';

moduleForModel('league', 'Unit | Model | league', {
  // Specify the other units that are required for this test.
  needs: ['model:tournament']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
