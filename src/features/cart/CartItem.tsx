import Image from 'next/image';
import { QuantitySelector } from '../products/components/QuantitySelector';

interface CartItemProps {
  title: string;
  price: number;
  size: string;
  quantity?: number;
  image: string;
}

export const CartItem = ({
  title,
  price,
  size,
  image,
  quantity,
}: CartItemProps) => {
  return (
    <article className="flex flex-row bg-white gap-4">
      <Image src={`/products/${image}`} alt={title} width={100} height={100} />

      <div className="w-full">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold">{title}</h4>
          <p className="text-sm font-semibold">$ {price}</p>
        </div>

        <p className="text-sm">{size}</p>
        <QuantitySelector value={quantity ?? 0} />

        <button className="text-sm underline cursor-pointer">Remove</button>
      </div>
    </article>
  );
};
