import Image from 'next/image';
import { Product } from '../products/product.interfaces';
import { QuantitySelector } from '../products/components/QuantitySelector';
import { Button } from '@/components/ui/button';

export const CartItem = ({
  title,
  price,
  size,
  image,
}: {
  title: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
}) => {
  return (
    <article className="flex flex-row bg-white gap-4">
      <Image src={`/products/${image}`} alt={title} width={100} height={100} />

      <div className="w-full">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold">{title}</h4>
          <p className="text-sm font-semibold">$ {price}</p>
        </div>

        <p className="text-sm">{size}</p>
        <QuantitySelector />

        <button className="text-sm underline">Remove</button>
      </div>
    </article>
  );
};
