import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../../helpers/setup-mirage-for-integration';

moduleForComponent('match-list', 'Integration | Component | match list', {
  integration: true,
  setup: function() {
    startMirage(this.container);
  }
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  var matches = server.createList('match', 5);
  this.set('matches', matches);

  this.render(hbs`{{match-list matches=matches}}`);

  assert.equal(this.$('.match').length, 5);
});
