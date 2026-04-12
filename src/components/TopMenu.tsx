'use client';

import { headingFont } from '@/config/fonts';
import { useStore } from '@/store/store';
import Link from 'next/link';
import { IoCartOutline, IoMenuOutline, IoSearchOutline } from 'react-icons/io5';

export const TopMenu = () => {
  const { openSideMenu } = useStore();

  return (
    <nav className="flex justify-between items-center w-full px-8">
      <Link href="/">
        <span className={`${headingFont.className} antialiased text-xl`}>
          Teslo | Store
        </span>
      </Link>

      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/men"
        >
          Men
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/women"
        >
          Women
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/kids"
        >
          Kids
        </Link>
      </div>

      <div className="flex items-center">
        <Link href="/search">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link
          href="/cart"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          <div className="flex items-center relative">
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          onClick={openSideMenu}
        >
          <IoMenuOutline className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};
