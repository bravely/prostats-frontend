export default function() {

  ////////////////////////
  // League Resources
  ////////////////////////

  this.get('/api/leagues', function(db) {
    return {
      data: db.leagues.map(attrs => (
        { type: 'leagues', id: attrs.id, attributes: attrs }
      ))
    };
  });

  this.get('/api/leagues/:id', function(db, request) {
    var id = request.params.id;
    // var collectIncluded = db.series.where({ league_id: id }).concat(db.tournaments.where({ league_id: id}));

    return {
      data: {
        type: 'leagues',
        id: id,
        attributes: db.users.find(id),
        relationships: {
          series: {
            data: db.series.where({ league_id: id }).map(attrs => (
              { type: 'series', id: attrs.id }
            ))
          },
          tournaments: {
            data: db.tournaments.where({ league_id: id }).map(attrs => (
              { type: 'tournaments', id: attrs.id }
            ))
          }
        }
      },
      included: db.tournaments.where({ league_id: id }).map(attrs => (
        { type: 'tournaments', id: attrs.id, attributes: attrs }
      ))
    };
  });

  ////////////////////////////
  // Tournaments Resources
  ////////////////////////////

  this.get('/api/tournaments/:id', function(db, request) {
    var id = request.params.id;

    return {
      data: {
        type: 'tournaments',
        id: id,
        attributes: db.tournaments.find(id)
      }
    };
  });

  //////////////////////////
  // Match Resources
  //////////////////////////

  this.get('/api/matches/:id', function(db, request) {
    var id = request.params.id;

    return {
      data: {
        type: 'matches',
        id: id,
        attributes: db.matches.find(id)
      }
    };
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId});
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
