'use server';

import prisma from '@/lib/prisma';

interface PaginationOptions {
  page?: number;
  take?: number;
}

export const getAllProducts = async ({
  page = 1,
  take = 10,
}: PaginationOptions = {}) => {
  if (page < 1) page = 1;
  if (isNaN(Number(page))) page = 1;

  try {
    const products = await prisma.product.findMany({
      take,
      skip: (page - 1) * take,
      include: {
        images: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
    });

    const formatttedProducts = products.map((productFromAPI) => {
      return {
        ...productFromAPI,
        images: productFromAPI.images.map((image) => image.url),
      };
    });

    return formatttedProducts;
  } catch (error) {
    throw new Error(`Failed to fetch products: ${error}`);
  }
};
