import { PageHeading } from '@/components/Title';
import { Genders } from '@/features/products/product.interfaces';
import { ProductGrid } from '@/features/products/ProductGrid';
import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: {
    productCategory: Genders;
  };
}

const categoryTitles: Record<Genders, string> = {
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

  const categoryProducts = initialData.products.filter(
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
