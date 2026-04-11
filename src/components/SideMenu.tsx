'use client';

import Link from 'next/link';
import {
  IoBagOutline,
  IoCloseOutline,
  IoLogOutOutline,
  IoPersonOutline,
} from 'react-icons/io5';

export const SideMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div>
      {/* background overlay */}
      <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-30 z-10"></div>

      {/* blur */}
      <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-xs"></div>

      {/* side menu */}
      <nav className="fixed p-4 top-0 right-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 ease-in-out">
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer text-gray-600"
          onClick={() => setIsOpen(false)}
        />

        <div className="relative mt-16">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-50 pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoPersonOutline size={20} />
          <span className="ml-3 text-lg">Profile</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoBagOutline size={20} />
          <span className="ml-3 text-lg">Orders</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogOutOutline size={20} />
          <span className="ml-3 text-lg">Logout</span>
        </Link>

        <div className="w-full border-t border-gray-200 mt-10"></div>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogOutOutline size={20} />
          <span className="ml-3 text-lg">Logout</span>
        </Link>
      </nav>
    </div>
  );
};
