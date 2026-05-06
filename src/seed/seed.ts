import 'dotenv/config';

import prisma from '@/lib/prisma';
import { initialData, SeedCategory } from './initialData';

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

  // Create products
  console.log('Creating products...');
  const categories = await prisma.category.findMany();

  const categoryMap = {} as Record<SeedCategory, string>;

  categories.forEach((category) => {
    categoryMap[category.name as SeedCategory] = category.id;
  });

  initialData.products.forEach(async (product) => {
    const { images, type, gender, ...rest } = product;
    const categoryId = categoryMap[type];

    const createdProduct = await prisma.product.create({
      data: {
        ...rest,
        gender: gender.toUpperCase() as 'MEN' | 'WOMEN' | 'KIDS' | 'UNISEX',
        categoryId,
      },
    });

    // Create product images
    console.log('Creating product images...');
    images.forEach(async (image) => {
      await prisma.productImage.createMany({
        data: {
          url: image,
          productId: createdProduct.id,
        },
      });
    });
  });

  console.log('Seed data loaded');
};

(() => {
  main();
})();
