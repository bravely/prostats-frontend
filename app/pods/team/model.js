import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  acronym: DS.attr('string'),
  location: DS.attr('string'),
  league: DS.belongsTo('league'),
  players: DS.hasMany('player')
});
