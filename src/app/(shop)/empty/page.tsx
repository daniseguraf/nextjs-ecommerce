import { PageHeading } from '@/components/Title';
import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';

const EmptyPage = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-4 py-4">
      <div className="flex items-center justify-center gap-2">
        <IoCartOutline size={80} className="w-10 h-10" />
        <h1 className="text-xl font-semibold">Your cart is empty</h1>
      </div>

      <p className="text-md">
        Please add some products to your cart to continue.
      </p>

      <Link href="/" className="text-md underline cursor-pointer">
        Go to home
      </Link>
    </main>
  );
};

export default EmptyPage;
