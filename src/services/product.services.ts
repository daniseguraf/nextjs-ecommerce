'use server';

import { Gender } from '@/generated/prisma/enums';
import prisma from '@/lib/prisma';

interface PaginationOptions {
  page?: number;
  take?: number;
  gender?: Gender;
}

export const getAllProducts = async ({
  page = 1,
  take = 6,
  gender,
}: PaginationOptions = {}) => {
  if (page < 1) page = 1;
  if (isNaN(Number(page))) page = 1;

  try {
    const [products, totalProducts] = await Promise.all([
      prisma.product.findMany({
        where: {
          gender,
        },
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
      }),
      prisma.product.count({ where: { gender } }),
    ]);

    const formatttedProducts = products.map((productFromAPI) => ({
      ...productFromAPI,
      images: productFromAPI.images.map((image) => image.url),
    }));

    return {
      currentPage: page,
      totalPages: Math.ceil(totalProducts / take),
      products: formatttedProducts,
    };
  } catch (error) {
    throw new Error(`Failed to fetch products: ${error}`);
  }
};
