import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../requests/products'
import ProductsContainer from '../../components/ProductsContainer';

export default function ProductsPage() {

  const [ products, setProducts ] = useState([]);

  useEffect(() => getAllProducts(setProducts), []);
  
  return (
    <div>
      <ProductsContainer products={products} />
    </div>
  )
}
