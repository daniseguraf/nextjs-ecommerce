'use client';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';

import Link from 'next/link';
import {
  IoBagOutline,
  IoCloseOutline,
  IoLogOutOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import { Button } from './ui/button';
import { useStore } from '@/store/store';

export const SideMenu = () => {
  const { isOpenSideMenu, closeSideMenu } = useStore();

  return (
    <Drawer
      direction="right"
      open={isOpenSideMenu}
      onOpenChange={closeSideMenu}
    >
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Move Goal</DrawerTitle>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          <IoCloseOutline
            size={50}
            className="absolute top-5 right-5 cursor-pointer text-gray-600"
            onClick={closeSideMenu}
          />
        </DrawerHeader>
        <div className="no-scrollbar overflow-y-auto px-4">
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

          <Button>
            <span className="ml-3 text-lg">Logout</span>
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
