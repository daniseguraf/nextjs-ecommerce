import Image from 'next/image';
import { QuantitySelector } from '../products/components/QuantitySelector';

interface CartItemProps {
  title: string;
  price: number;
  quantity?: number;
  image: string;
}

export const CheckoutItem = ({
  title,
  price,
  image,
  quantity,
}: CartItemProps) => {
  return (
    <article className="flex gap-4">
      <Image src={`/products/${image}`} alt={title} width={100} height={100} />

      <div className="w-full flex flex-col gap-1">
        <h4 className="text-sm">{title}</h4>
        <span className="text-sm font-semibold">$ {price} x 3</span>
        <span className="text-sm font-bold"> Subtotal: $ 555</span>
      </div>
    </article>
  );
};
