import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  playedAt: DS.attr('date'),
  notes: DS.attr('string'),
  gameLength: DS.attr('number'),
  gameNumber: DS.attr('number'),
  youtubeUrl: DS.attr('string'),
  match: DS.belongsTo('match'),
  blueTeam: DS.belongsTo('team'),
  redTeam: DS.belongsTo('team'),
  winner: DS.belongsTo('team'),
  players: DS.hasMany('player'),
  plays: DS.hasMany('play'),

  redTeamPlays: Ember.computed.filter('plays', (play) => play.get('team.id') === this.get('redTeam.id')).property('plays', 'redTeam')
});
