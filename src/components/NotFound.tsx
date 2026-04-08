import { headingFont } from '@/config/fonts';
import Link from 'next/link';
import Image from 'next/image';

export const NotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center h-screen ">
      <div className="text-center p-4">
        <h2 className={`${headingFont.className} text-8xl antialiased`}>404</h2>

        <p className="text-xl font-semibold">Page Not Found</p>
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 transition-all"
        >
          Go back to home
        </Link>
      </div>

      <Image src="/images/not-found.png" alt="404" width={500} height={500} />
    </div>
  );
};
