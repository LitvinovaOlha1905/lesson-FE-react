import React, { useEffect, useState } from 'react'
import { getProductsByCategory } from '../../requests/products'
import { useParams } from 'react-router-dom'
import ProductsContainer from '../../components/ProductsContainer';

export default function ProductsByCategoryPage() {

  const [ productsByCategory, setProductsByCategory ] = useState([]);

  const { category_id } = useParams();

  useEffect(() => {
    getProductsByCategory(category_id, setProductsByCategory);
  }, []);
  

  return (
    <div>
      <ProductsContainer productsByCategory={productsByCategory} />
    </div>
  )
}
