import { TopMenu } from '@/components/TopMenu';

interface ShopLayoutProps {
  children: React.ReactNode;
}

const ShopLayout = ({ children }: ShopLayoutProps) => {
  return (
    <div className="min-h-screen">
      <TopMenu />
      {children}
    </div>
  );
};

export default ShopLayout;
