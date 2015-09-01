import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.hacker.noun,
  acronym: faker.hacker.abbreviation,
  location: faker.address.country
});
