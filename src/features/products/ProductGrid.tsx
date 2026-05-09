import { Pagination } from '@/components/Pagination';
import { Product } from './product.interfaces';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  currentPage: number;
  totalPages: number;
}

export const ProductGrid = ({
  products,
  currentPage,
  totalPages,
}: ProductGridProps) => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
};
