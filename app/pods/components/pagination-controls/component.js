import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    firstPage() {
      this.set('page', 1);
    },
    previousPage() {
      if (!this.get('isFirstPage')) {
        this.decrementProperty('page');
      }
    },
    nextPage() {
      if (!this.get('isLastPage')) {
        this.incrementProperty('page');
      }
    },
    lastPage() {
      var lastPage = this.get('maxPages');
      this.set('page', lastPage);
    },
    toggleToPageActivated() {
      var currentPage = this.get('page');
      this.set('toPageValue', currentPage);
      this.toggleProperty('toPageActivated');
    },
    toPage() {
      var toPageValue = this.get('toPageValue');
      this.set('page', toPageValue);
      this.toggleProperty('toPageActivated');
    }
  },
  toPageActivated: false,
  toPageValue: null,
  isFirstPage: Ember.computed.equal('page', 1),
  isLastPage: Ember.computed('page', 'maxPages', function() {
    return this.get('page') === this.get('maxPages');
  })
});
