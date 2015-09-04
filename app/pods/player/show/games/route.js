import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  maxPages: Ember.computed('model', function() {
    return this.store.metadataFor('model.games').total_pages;
  }),

  model(params) {
    return this.store.query('game', {
      player_id: this.modelFor('player.show').id,
      page: params.page,
      limit: params.limit
    });
  }
});
