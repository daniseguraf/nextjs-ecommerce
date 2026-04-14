import { PageHeading } from '@/components/Title';
import { CartItem } from '@/features/cart/CartItem';
import { CartSummary } from '@/features/cart/CartSummary';
import { initialData } from '@/seed/seed';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teslo Shop | Your Cart',
  description: 'Cart page',
};

const cartItems = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
  initialData.products[4],
  initialData.products[5],
];

const CartPage = () => {
  return (
    <main className="w-full max-w-5xl mx-auto">
      <PageHeading title="Cart" />

      <div className="grid grid-cols-1 md:grid-cols-7 gap-14 py-4">
        <div className="col-span-4">
          <div className="flex flex-col gap-8">
            {cartItems.map(({ slug, title, price, sizes, images }) => (
              <CartItem
                key={slug}
                title={title}
                price={price}
                size={sizes[0]}
                image={images[0]}
              />
            ))}
          </div>
        </div>

        <div className="col-span-3">
          <CartSummary />
        </div>
      </div>
    </main>
  );
};

export default CartPage;
