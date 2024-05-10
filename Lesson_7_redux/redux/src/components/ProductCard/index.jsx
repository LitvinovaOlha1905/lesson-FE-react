import React from 'react'
import { useDispatch } from 'react-redux';
import { decrPriceAction, deleteProductAction, incrPriceAction } from '../../store/reducers/productsReducer';

export default function ProductCard({ id, title, price, count }) {

  const dispatch = useDispatch();

  const incr = e => {
    e.stopPropagation();
    dispatch(incrPriceAction(id));
  }

  const decr = e => {
    e.stopPropagation();
    dispatch(decrPriceAction(id));
  }

  return (
    <div onClick={() => dispatch(deleteProductAction(id))}>
      <p>Title: { title }</p>
      <p>Count: { count }</p>
      <p>Price: { price }$</p>
      <div>
        <button onClick={decr}>-</button>
        <button onClick={incr}>+</button>
      </div>
    </div>
  )
}
