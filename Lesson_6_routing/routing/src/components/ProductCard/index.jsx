import React from 'react'
import s from './index.module.css'

export default function ProductCard({ id, title, price, images }) {
  return (
    <div className={s.card}>
      <img src={images[0]} alt={title} />
      <p>{ title }</p>
      <p>{ price }$</p>
    </div>
  )
}
