import { moduleForModel, test } from 'ember-qunit';

moduleForModel('series', 'Unit | Model | series', {
  // Specify the other units that are required for this test.
  needs: ['model:tournament', 'model:league']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
