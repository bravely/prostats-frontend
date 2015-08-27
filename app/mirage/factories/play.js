import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  kills: faker.random.number(15),
  deaths: faker.random.number(10),
  assists: faker.random.number(20),
  kda: faker.random.number(8),
  'end-level': faker.random.number(18),
  'total-gold': faker.random.number(15000),
  'minions-killed': faker.random.number(400)
});
