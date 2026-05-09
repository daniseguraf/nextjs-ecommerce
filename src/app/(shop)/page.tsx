export const revalidate = 60;

import { PageHeading } from '@/components/Title';
import { ProductGrid } from '@/features/products/ProductGrid';
import { getAllProducts } from '@/services/product.services';
import { redirect } from 'next/navigation';

interface HomeProps {
  searchParams: {
    page?: string;
  };
}

const Home = async ({ searchParams }: HomeProps) => {
  const { page = '1' } = await searchParams;

  const { currentPage, totalPages, products } = await getAllProducts({
    page: Number(page),
  });

  if (products.length === 0) {
    redirect('/');
  }

  return (
    <main className="flex flex-col gap-8">
      <PageHeading title="All Products" subtitle="Welcome to the Teslo Store" />

      <ProductGrid
        products={products}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </main>
  );
};

export default Home;
