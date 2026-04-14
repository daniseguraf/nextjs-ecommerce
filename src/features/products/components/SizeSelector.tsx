import { Button } from '@/components/ui/button';
import type { Size } from '../product.interfaces';

export const SizeSelector = ({ sizes }: { sizes: Size[] }) => {
  return (
    <div className="flex items-center gap-2 py-2">
      {sizes.map((size) => (
        <Button key={size} variant="link" size="lg" className="font-semibold">
          {size}
        </Button>
      ))}
    </div>
  );
};
