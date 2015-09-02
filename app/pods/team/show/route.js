import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      team: this.store.findRecord('team', params.team_id),
      matches: this.store.query('match', { finished: true, team_id: params.team_id })
    });
  }
});
