import { PrismaClient } from '@prisma/client';

const memes = [
  {
    id: 1,
    title: 'Distracted Boyfriend',
    image_url: 'https://i.imgflip.com/1ur9b0.jpg',
    likes: 34,
    link: 'https://www.heroui.com/docs/components/card',
  },
  {
    id: 2,
    title: 'Success Kid',
    image_url: 'https://i.imgflip.com/1bhk.jpg',
    likes: 76,
    link: 'https://knowyourmeme.com/memes/success-kid',
  },
  {
    id: 4,
    title: 'Drake Hotline Bling',
    image_url: 'https://i.imgflip.com/30b1gx.jpg',
    likes: 42,
    link: 'https://knowyourmeme.com/memes/drakeposting',
  },
  {
    id: 5,
    title: 'Two Buttons',
    image_url: 'https://i.imgflip.com/1g8my4.jpg',
    likes: 21,
    link: 'https://knowyourmeme.com/memes/two-buttons',
  },
  {
    id: 6,
    title: 'Change My Mind',
    image_url: 'https://i.imgflip.com/24y43o.jpg',
    likes: 67,
    link: 'https://knowyourmeme.com/memes/change-my-mind',
  },
  {
    id: 7,
    title: 'Hide the Pain Harold',
    image_url: 'https://i.imgflip.com/gk5el.jpg',
    likes: 19,
    link: 'https://knowyourmeme.com/memes/hide-the-pain-harold',
  },
  {
    id: 8,
    title: 'Mocking Spongebob',
    image_url: 'https://i.imgflip.com/1otk96.jpg',
    likes: 39,
    link: 'https://knowyourmeme.com/memes/mocking-spongebob',
  },
  {
    id: 9,
    title: 'Is This a Pigeon?',
    image_url: 'https://i.imgflip.com/1o00in.jpg',
    likes: 53,
    link: 'https://knowyourmeme.com/memes/is-this-a-pigeon',
  },
  {
    id: 10,
    title: 'Expanding Brain',
    image_url: 'https://i.imgflip.com/1jwhww.jpg',
    likes: 88,
    link: 'https://knowyourmeme.com/memes/expanding-brain',
  },
];

const prisma = new PrismaClient();

async function main() {
  await prisma.meme.createMany({ data: memes });
  console.log('Seeded memes!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
