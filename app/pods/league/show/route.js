import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('league', params.league_id);
  }
});
