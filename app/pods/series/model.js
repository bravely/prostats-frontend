import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  season: DS.attr('string'),
  finished: DS.attr('boolean'),
  tournaments: DS.hasMany('tournament'),
  league: DS.belongsTo('league')
});
