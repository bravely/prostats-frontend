import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.commerce.department,
  season: faker.commerce.product,
  finished: faker.list.random(true, false)
});
