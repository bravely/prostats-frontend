import Ember from 'ember';

export default Ember.Component.extend({
  unplayedTournaments: Ember.computed.filterBy('tournaments', 'lastPlayedAt', null),
  playedTournaments: Ember.computed.filter('tournaments', (tournament) => !!tournament.get('lastPlayedAt'))
});
