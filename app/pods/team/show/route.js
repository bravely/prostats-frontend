import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  maxPages: Ember.computed('model', function() {
    return this.store.metadataFor('model.matches').total_pages;
  }),

  model(params) {
    return Ember.RSVP.hash({
      team: this.store.findRecord('team', params.team_id),
      matches: this.store.query('match', {
        finished: true,
        team_id: params.team_id,
        page: params.page,
        limit: params.limit
      })
    });
  }
});
