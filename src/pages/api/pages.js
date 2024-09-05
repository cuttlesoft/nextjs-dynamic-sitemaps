import { faker } from "@faker-js/faker";

function createRandomPage() {
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
  const data = faker.helpers.multiple(createRandomPage, { count: 50 });

  res.status(200).json(data);
}
