import { PageHeading } from '@/components/Title';
import { ProductGrid } from '@/features/products/ProductGrid';
import { initialData } from '@/seed/seed';

const Home = () => {
  return (
    <main className="flex flex-col gap-8">
      <PageHeading title="All Products" subtitle="Welcome to the Teslo Store" />

      <ProductGrid products={initialData.products} />
    </main>
  );
};

export default Home;
