import 'dotenv/config';

import prisma from '@/lib/prisma';
import { initialData } from './initialData';

export const main = async () => {
  // Delete all existing data
  console.log('Deleting existing data...');
  await Promise.all([
    prisma.productImage.deleteMany(),
    prisma.product.deleteMany(),
    prisma.category.deleteMany(),
  ]);

  // Create categories
  console.log('Creating categories...');
  await prisma.category.createMany({
    data: initialData.categories.map((category) => ({
      name: category,
    })),
  });

  console.log('Seed data loaded');
};

(() => {
  main();
})();
