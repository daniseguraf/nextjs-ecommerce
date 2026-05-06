import {
  Product as ProductType,
  Size as SizeType,
  Gender as GenderType,
} from '@/generated/prisma/client';

export type Product = ProductType & {
  images: string[];
};

export type Size = SizeType;
export type Gender = GenderType;
