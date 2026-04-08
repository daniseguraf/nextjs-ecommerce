import Link from 'next/link';
import { Product } from './product.interfaces';
import Image from 'next/image';

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="rounded-md overflow-hidden fade-in">
      <div className="relative group block overflow-hidden">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={`/products/${product.images[0]}`}
            alt={product.title}
            width={500}
            height={500}
            className="w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          <Image
            src={`/products/${product.images[1]}`}
            alt={product.title}
            width={500}
            height={500}
            className="w-full object-cover absolute top-0 left-0 inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        </Link>
      </div>

      <div className="flex flex-col p-4">
        <Link
          href={`/product/${product.slug}`}
          className="text-md font-semibold hover:text-blue-600"
        >
          {product.title}
        </Link>
        <span className="text-sm text-gray-500 font-bold">
          $ {product.price}
        </span>
      </div>
    </div>
  );
};
