import { TopMenu } from '@/components/TopMenu';
import { Footer } from '@/components/ui/footer/Footer';
import { lazy, Suspense } from 'react';

const SideMenu = lazy(() =>
  import('@/components/SideMenu').then((module) => ({
    default: module.SideMenu,
  }))
);

interface ShopLayoutProps {
  children: React.ReactNode;
}

const ShopLayout = ({ children }: ShopLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopMenu />
      <Suspense fallback={null}>
        <SideMenu />
      </Suspense>

      <main className="p-8 mt-2 flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default ShopLayout;
