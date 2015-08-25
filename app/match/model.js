import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  playedAt: DS.attr('date'),
  live: DS.attr('boolean'),
  finished: DS.attr('boolean'),
  maxGames: DS.attr('number'),
  tournament: DS.belongsTo('tournament'),
  games: DS.hasMany('games')
});
