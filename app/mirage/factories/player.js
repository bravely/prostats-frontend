import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  handle: faker.hacker.noun,
  position: faker.list.random('top', 'jungle', 'middle', 'marksman', 'support'),
  'first-name': faker.name.firstName,
  'last-name': faker.name.lastName,
  'season-wins': faker.random.number(19),
  'season-losses': faker.random.number(19),
  starter: faker.list.random(true, false),
  'contract-expires-at': faker.date.future
});
