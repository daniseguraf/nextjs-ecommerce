export const revalidate = 60;

import { PageHeading } from '@/components/Title';
import { Gender } from '@/features/products/product.interfaces';
import { ProductGrid } from '@/features/products/ProductGrid';
import { getAllProducts } from '@/services/product.services';
import { notFound, redirect } from 'next/navigation';

interface GenderPageProps {
  params: {
    gender: Gender;
  };
  searchParams: {
    page?: string;
  };
}

const categoryTitles: Record<Gender, string> = {
  men: 'Men',
  women: 'Women',
  kids: 'Kids',
  unisex: 'Unisex',
};

const GenderPage = async ({ params, searchParams }: GenderPageProps) => {
  const { gender } = await params;
  const { page = '1' } = await searchParams;

  if (!(gender in categoryTitles)) {
    notFound();
  }

  const { products, currentPage, totalPages } = await getAllProducts({
    gender,
    page: Number(page),
  });

  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }

  return (
    <main className="flex flex-col gap-8">
      <PageHeading title={categoryTitles[gender]} />

      <ProductGrid
        products={products}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </main>
  );
};

export default GenderPage;
