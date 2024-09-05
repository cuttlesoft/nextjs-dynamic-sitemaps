import { faker } from "@faker-js/faker";

function createRandomPost() {
  return {
    id: faker.string.uuid(),
    date: faker.date.past().toISOString(),
    modified: faker.date.recent().toISOString(),
    slug: faker.lorem.slug(),
    link: faker.lorem.slug(),
    title: faker.lorem.sentence(),
  };
}

export default function handler(req, res) {
  const data = faker.helpers.multiple(createRandomPost, { count: 1000 });

  res.setHeader("x-cms-total", 2000);
  res.status(200).json(data);
}
