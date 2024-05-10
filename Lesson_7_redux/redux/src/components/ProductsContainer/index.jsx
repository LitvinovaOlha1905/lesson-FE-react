import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../ProductCard';

export default function ProductsContainer() {

  const productsState = useSelector(store => store.products);

  return (
    <div>
      {
        productsState.map(el => <ProductCard key={el.id} {...el} />)
      }
    </div>
  )
}
