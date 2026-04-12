export interface Product {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: Size[];
  slug: string;
  tags: string[];
  title: string;
  type: Types;
  gender: Genders;
}

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
export type Types = 'shirts' | 'pants' | 'hoodies' | 'hats';
export type Genders = 'men' | 'women' | 'kids' | 'unisex';
