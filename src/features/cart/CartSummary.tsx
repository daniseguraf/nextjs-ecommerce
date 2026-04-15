import Link from 'next/link';

export const CartSummary = () => {
  return (
    <div className="bg-white p-8 rounded shadow-xl flex flex-col gap-4">
      <h3 className="text-2xl font-semibold">Order Summary</h3>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-sm">No. of products:</span>
          <span className="text-sm">6</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm">Subtotal:</span>
          <span className="text-sm">$ 126</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm">Taxes (15%):</span>
          <span className="text-sm">$ 100</span>
        </div>

        <div className="flex items-center justify-between pt-4">
          <span className="text-xl font-semibold">Total:</span>
          <span className="text-xl font-semibold">$ 226</span>
        </div>
      </div>

      <Link
        href="/checkout/address"
        className="w-full btn-primary flex items-center justify-center my-2 bg-blue-600 hover:bg-blue-800 cursor-pointer"
      >
        Checkout
      </Link>
    </div>
  );
};
