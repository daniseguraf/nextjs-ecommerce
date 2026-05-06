import { PageHeading } from '@/components/Title';
import { Gender } from '@/features/products/product.interfaces';
import { ProductGrid } from '@/features/products/ProductGrid';
import { getAllProducts } from '@/services/product.services';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: {
    productCategory: Gender;
  };
}

const categoryTitles: Record<Gender, string> = {
  men: 'Men',
  women: 'Women',
  kids: 'Kids',
  unisex: 'Unisex',
};

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { productCategory } = await params;

  if (!(productCategory in categoryTitles)) {
    notFound();
  }

  const productsFromAPI = await getAllProducts();

  const categoryProducts = productsFromAPI.filter(
    (product) => product.gender === productCategory
  );

  return (
    <main className="flex flex-col gap-8">
      <PageHeading title={categoryTitles[productCategory]} />

      <ProductGrid products={categoryProducts} />
    </main>
  );
};

export default CategoryPage;
