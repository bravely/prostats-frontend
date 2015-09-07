import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('application-header', 'Integration | Component | application header', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{application-header}}`);

  assert.equal(this.$('.logo').attr('src'), 'assets/images/logo.png');

  // Template block usage:
  // this.render(hbs`
  //   {{#application-header}}
  //     template block text
  //   {{/application-header}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
