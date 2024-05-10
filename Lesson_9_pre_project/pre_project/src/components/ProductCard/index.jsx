import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../store/reducers/cartReducer';

export default function ProductCard({ id, image, title, price }) {

  const dispatch = useDispatch();

  return (
    <div className={s.card}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
        <p>{ title }</p>
        <p>{ price }$</p>
      </Link>
      <button onClick={() => dispatch(addToCartAction({ id, image, title, price }))}>
        ADD TO CART
      </button>
    </div>
  )
}
