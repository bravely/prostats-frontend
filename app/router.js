import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('league', function() {
    this.route('show', { path: '/:league_id' });
  });
});

export default Router;
