import React from 'react';
import { ShoppingCart, GemIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { state } = useCart();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <GemIcon className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">Luxe Jewels</span>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {state.items.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};