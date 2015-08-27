import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  'played-at': faker.date.recent,
  notes: faker.lorem.paragraph,
  'game-length': faker.random.number({'min': 1200, 'max': 3600}),
  'game-number': faker.random.number(5),
  'youtube-url': faker.image.imageUrl
});
