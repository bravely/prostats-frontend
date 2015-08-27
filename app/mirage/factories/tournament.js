import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.company.companyName,
  'starts-at': faker.date.past,
  'ends-at': faker.date.recent,
  finished: faker.list.random(true, false),
  season: faker.company.companyName
});
