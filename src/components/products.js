import React from 'react';
import ProductCard from './subcomponents/ProductCard';


export default function Products() {
  return (
    <div className='p-3 grid grid-flow-row gap-2'>
        <ProductCard/>
        <ProductCard/>
    </div>
  );
}
