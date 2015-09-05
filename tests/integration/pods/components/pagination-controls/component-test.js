import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pagination-controls', 'Integration | Component | pagination controls', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('page', 1);
  this.set('maxPages', 3);

  this.render(hbs`{{pagination-controls page=page maxPages=maxPages}}`);

  assert.equal(this.$('.toPage').text().trim(), 1);
});
