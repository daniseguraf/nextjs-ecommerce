import { SideMenu } from '@/components/SideMenu';
import { TopMenu } from '@/components/TopMenu';

interface ShopLayoutProps {
  children: React.ReactNode;
}

const ShopLayout = ({ children }: ShopLayoutProps) => {
  return (
    <div className="min-h-screen">
      <TopMenu />
      <SideMenu />
      <main className="p-8 mt-2">{children}</main>
    </div>
  );
};

export default ShopLayout;
