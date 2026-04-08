import { Title } from '@/components/Title';
import { ProductGrid } from '@/features/products/ProductGrid';
import { initialData } from '@/seed/seed';

const Home = () => {
  return (
    <main className="flex flex-col flex-1 px-4">
      <Title title="Teslo Store" subtitle="Welcome to the Teslo Store" />

      <ProductGrid products={initialData.products} />
    </main>
  );
};

export default Home;
