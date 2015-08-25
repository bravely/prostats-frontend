import DS from 'ember-data';

export default DS.Model.extend({
  handle: DS.attr('string'),
  position: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  seasonWins: DS.attr('number'),
  seasonLosses: DS.attr('number'),
  team: DS.belongsTo('team')
});
