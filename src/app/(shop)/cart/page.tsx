import { PageHeading } from '@/components/Title';
import { CartItem } from '@/features/cart/CartItem';
import { OrderSummary } from '@/features/cart/OrderSummary';
import { Product } from '@/features/products/product.interfaces';
import { initialData } from '@/seed/seed';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

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

// const cartItems: Product[] = [];

const CartPage = () => {
  const isEmpty = cartItems.length === 0;

  if (isEmpty) {
    redirect('/empty');
  }

  return (
    <main className="w-full max-w-5xl mx-auto flex flex-col gap-8">
      <PageHeading title="Cart" />

      <div className="grid grid-cols-1 md:grid-cols-7 gap-18 py-4">
        <div className="col-span-4">
          <div className="flex flex-col gap-12">
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
          <OrderSummary btnText="Checkout" btnLink="/checkout/address" />
        </div>
      </div>
    </main>
  );
};

export default CartPage;
