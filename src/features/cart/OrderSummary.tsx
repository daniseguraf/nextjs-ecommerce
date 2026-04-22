import Link from 'next/link';

interface OrderSummaryProps {
  btnText?: string;
  btnLink?: string;
}

export const OrderSummary = ({
  btnText = '',
  btnLink = '',
}: OrderSummaryProps) => {
  return (
    <div className="bg-white p-8 rounded shadow-xl flex flex-col gap-4">
      <h3 className="text-2xl font-semibold">Order Summary</h3>

      <div className="flex flex-col gap-2">
        {false && (
          <div className="flex flex-col">
            <h4 className="text-md font-semibold mb-1">Delivery Address</h4>
            <span className="text-sm">John Doe</span>
            <span className="text-sm">123 Main St</span>
            <span className="text-sm">Anytown, USA</span>
          </div>
        )}

        {false && <div className="w-full h-0.5 bg-gray-200 my-2" />}

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
        href={btnLink}
        className="w-full btn-primary flex items-center justify-center my-2 bg-blue-600 hover:bg-blue-800 cursor-pointer"
      >
        {btnText}
      </Link>
    </div>
  );
};
