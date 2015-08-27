import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.lorem.sentence,
  'played-at': faker.date.recent,
  live: faker.list.random(true, false),
  finished: faker.list.random(true, false),
  maxGames: faker.list.random(1, 3, 5)
});
