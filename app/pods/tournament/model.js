import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  startsAt: DS.attr('date'),
  endsAt: DS.attr('date'),
  finished: DS.attr('boolean'),
  season: DS.attr('string'),
  league: DS.belongsTo('league'),
  matches: DS.hasMany('match')
});
