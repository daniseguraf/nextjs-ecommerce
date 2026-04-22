import { PageHeading } from '@/components/Title';
import { OrderSummary } from '@/features/cart/OrderSummary';
import { CheckoutItem } from '@/features/cart/CheckoutItem';
import { initialData } from '@/seed/seed';
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { IoCardOutline } from 'react-icons/io5';

const cartItems = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
  initialData.products[4],
  initialData.products[5],
];

interface OrderPageProps {
  params: {
    id: string;
  };
}

export const metadata: Metadata = {
  title: 'Teslo Shop | Order',
  description: 'Order page',
};

const OrderPage = async ({ params }: OrderPageProps) => {
  const { id } = await params;
  console.log('id', id);

  return (
    <main className="w-full max-w-5xl mx-auto flex flex-col gap-8">
      <PageHeading title={`Order ${id}`} />

      <div
        className={cn(
          'flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5',
          {
            // 'bg-red-500': true,
            'bg-green-700': true,
          }
        )}
      >
        <IoCardOutline className="w-4 h-4" />
        <span>Order #{id}</span>
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

export default OrderPage;
