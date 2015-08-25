import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  region: DS.attr('string'),
  abbr: DS.attr('string')
});
