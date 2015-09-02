import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../../../helpers/setup-mirage-for-integration';

moduleForComponent('match-card', 'Integration | Component | match card', {
  integration: true,
  setup: function() {
    startMirage(this.container);
  }
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  var match = server.create('match');
  this.set('match', match);

  this.render(hbs`{{match-card match=match}}`);

  assert.equal(this.$('.matchName').text().trim(), match.name);
});
