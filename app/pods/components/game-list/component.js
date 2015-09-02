import Ember from 'ember';

export default Ember.Component.extend({
  gamesSorting: ['gameNumber:asc'],
  sortedGames: Ember.computed.sort('games', 'gamesSorting')
});
