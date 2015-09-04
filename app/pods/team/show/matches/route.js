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
    return this.store.query('match', {
      finished: true,
      team_id: this.modelFor('team.show').id,
      page: params.page,
      limit: params.limit
    });
  }
});
