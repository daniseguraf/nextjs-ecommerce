'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(0);

  const handleDecrement = () => {
    if (quantity <= 0) return;

    setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    if (quantity >= 5) return;
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center gap-4 py-2">
      <Button variant="outline" size="sm" onClick={handleDecrement}>
        -
      </Button>
      <span className="w-20 px-5 py-1 bg-gray-100 text-center rounded">
        {quantity}
      </span>
      <Button variant="outline" size="sm" onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
};
