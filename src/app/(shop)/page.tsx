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

  const productsFromAPI = await getAllProducts({ page: Number(page) });
  console.log('productsFromAPI', productsFromAPI);

  if (productsFromAPI.length === 0) {
    redirect('/');
  }

  return (
    <main className="flex flex-col gap-8">
      <PageHeading title="All Products" subtitle="Welcome to the Teslo Store" />

      <ProductGrid products={productsFromAPI} />
    </main>
  );
};

export default Home;
