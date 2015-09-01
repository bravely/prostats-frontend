import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  kills: DS.attr('number'),
  deaths: DS.attr('number'),
  assists: DS.attr('number'),
  kda: DS.attr('number'),
  endLevel: DS.attr('number'),
  totalGold: DS.attr('number'),
  minionsKilled: DS.attr('number'),
  position: DS.attr('string'),
  player: DS.belongsTo('player'),
  game: DS.belongsTo('game'),
  team: DS.belongsTo('team'),

  redTeam: Ember.computed('game', 'team', function() {
    return (this.get('game.redTeam.id') === this.get('team.id'));
  })
});
