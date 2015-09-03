import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'limit'],
  page: 1,
  limit: 5,
  maxPages: Ember.computed('model.matches', function() {
    return this.get('model.matches').meta.total_pages;
  })
});
