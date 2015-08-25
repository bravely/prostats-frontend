import DS from 'ember-data';

export default DS.Model.extend({
  playedAt: DS.attr('date'),
  notes: DS.attr('string'),
  gameLength: DS.attr('number'),
  gameNumber: DS.attr('number'),
  youtubeUrl: DS.attr('string'),
  match: DS.belongsTo('match')
});
