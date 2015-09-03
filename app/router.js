import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('league', function() {
    this.route('show', { path: '/:league_id' });
  });

  this.route('tournament', function() {
    this.route('show', { path: '/:tournament_id' } );
  });

  this.route('match', function() {
    this.route('show', { path: '/:match_id' } );
  });

  this.route('game', function() {
    this.route('show', { path: '/:game_id' });
  });

  this.route('team', function() {
    this.route('show', { path: '/:team_id' });
  });

  this.route('player', function() {
    this.route('show', { path: '/:player_id' });
  });
});

export default Router;
