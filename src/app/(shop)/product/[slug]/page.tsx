import { Slider } from '@/components/Slider';
import { Button } from '@/components/ui/button';
import { Description } from '@/features/products/components/Description';
import { QuantitySelector } from '@/features/products/components/QuantitySelector';
import { SizeSelector } from '@/features/products/components/SizeSelector';
import { Product } from '@/features/products/product.interfaces';
import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug } = await params;

  const product: Product | undefined = initialData.products.find(
    (product) => product.slug === slug
  );

  if (!product) notFound();

  const { title, description, price, sizes, images } = product;

  console.log('product', product);

  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-1 md:col-span-2 p-2">
        <Slider images={images} />
      </div>

      {/* Product Details */}
      <div className="col-span-1 p-2">
        <h1 className="text-2xl">{title}</h1>
        <p className="text-lg mb-4">${price}</p>

        <SizeSelector sizes={sizes} />
        <QuantitySelector />

        <Button size="lg" className="w-full my-2 bg-blue-600">
          Add to Cart
        </Button>

        <Description description={description} />
      </div>
    </main>
  );
};

export default ProductPage;
