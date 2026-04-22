import { PageHeading } from '@/components/Title';
import { OrderSummary } from '@/features/cart/OrderSummary';
import { CheckoutItem } from '@/features/cart/CheckoutItem';
import { initialData } from '@/seed/seed';
import { Metadata } from 'next';
import Link from 'next/link';

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

const CheckoutPage = () => {
  return (
    <main className="w-full max-w-5xl mx-auto flex flex-col gap-8">
      <PageHeading title="Checkout" />

      <div className="flex flex-col gap-4">
        <Link href="/cart" className="text-md underline cursor-pointer">
          Edit Cart
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-18 py-4">
        <div className="col-span-4">
          <div className="flex flex-col gap-12">
            {cartItems.map(({ slug, title, price, sizes, images }) => (
              <CheckoutItem
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
          <OrderSummary btnText="Send Order" btnLink="/orders/123" />
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
