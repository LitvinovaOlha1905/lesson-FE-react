import React from 'react'
import ProductCard from '../ProductCard'
import s from './index.module.css'

export default function ProductsContainer({ productsByCategory }) {
  return (
    <div className={s.container}>
      {
        productsByCategory.map(el => <ProductCard key={el.id} {...el} />)
      }
    </div>
  )
}
