import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.commerce.product,
  region: faker.address.country,
  abbr: faker.company.companySuffix
});
