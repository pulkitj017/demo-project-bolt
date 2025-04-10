import React from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';
import { Category } from '../types';

interface ProductGridProps {
  selectedCategory?: Category;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ selectedCategory }) => {
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};