import React from 'react'
import s from './index.module.css'
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { decrementCountAction, deleteSindleProductAction, incrementCountAction } from '../../store/reducers/cartReducer';

export default function CartItem({ id, title, price, image, count }) {

  const dispatch = useDispatch();

  const total = price * count;

  return (
    <div className={s.card}>
      <img src={image} alt={title} />
      <p>{ title }</p>
      <p>{ total.toFixed(2) }$</p>
      <div>
        <button onClick={() => dispatch(decrementCountAction(id))}>
          -
        </button>
        <p>{ count }</p>
        <button onClick={() => dispatch(incrementCountAction(id))}>
          +
        </button>
      </div>
      <IoCloseSharp onClick={() => dispatch(deleteSindleProductAction(id))} />
    </div>
  )
}
