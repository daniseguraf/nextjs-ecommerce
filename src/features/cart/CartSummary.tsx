import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const CartSummary = () => {
  return (
    <div className="bg-white p-4 rounded shadow-xl ">
      <h3 className="text-2xl font-semibold">Order Summary</h3>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="text-sm">Subtotal</p>
        </div>
      </div>

      <Link
        href="/checkout/address"
        className="w-full btn-primary flex items-center justify-center my-2 bg-blue-600"
      >
        Checkout
      </Link>
    </div>
  );
};
