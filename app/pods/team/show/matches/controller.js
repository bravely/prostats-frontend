import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'limit'],
  page: 1,
  limit: 5,
  maxPages: Ember.computed('model', function() {
    return this.get('model').meta.total_pages;
  })
});
