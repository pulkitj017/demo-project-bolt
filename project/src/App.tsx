import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ProductGrid } from './components/ProductGrid';
import { CartProvider } from './context/CartContext';
import { Category } from './types';

const categories: Category[] = ['necklaces', 'rings', 'earrings', 'bracelets'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>();

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Luxury Jewelry Collection</h1>
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedCategory(undefined)}
                className={`px-4 py-2 rounded-md ${
                  !selectedCategory
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-md capitalize ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <ProductGrid selectedCategory={selectedCategory} />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;