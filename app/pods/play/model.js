import DS from 'ember-data';

export default DS.Model.extend({
  kills: DS.attr('number'),
  deaths: DS.attr('number'),
  assists: DS.attr('number'),
  kda: DS.attr('number'),
  endLevel: DS.attr('number'),
  totalGold: DS.attr('number'),
  minionsKilled: DS.attr('number'),
  player: DS.belongsTo('player'),
  game: DS.belongsTo('game'),
  team: DS.belongsTo('team')
});
