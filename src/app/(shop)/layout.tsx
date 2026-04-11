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
      {children}
    </div>
  );
};

export default ShopLayout;
