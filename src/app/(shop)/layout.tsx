import { SideMenu } from '@/components/SideMenu';
import { TopMenu } from '@/components/TopMenu';
import { Footer } from '@/components/ui/footer/Footer';

interface ShopLayoutProps {
  children: React.ReactNode;
}

const ShopLayout = ({ children }: ShopLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopMenu />
      <SideMenu />

      <main className="p-8 mt-2 flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default ShopLayout;
