import React, { useContext } from 'react'
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Context } from '../../context';
import { deleteAllProductsAction } from '../../store/reducers/cartReducer';

export default function SendOrderForm() {

  const { setModalActive } = useContext(Context);

  const cartState = useSelector(store => store.cart);

  const totalSum = cartState.reduce((acc, el) => acc + (el.price * el.count), 0).toFixed(2);

  const cartCount = cartState.reduce((acc, el) => acc + el.count, 0);

  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();

    const { name, email } = e.target;

    const newOrder = {
      id: Date.now(),
      name: name.value,
      email: email.value,
      total: +totalSum,
      cart: cartState
    }

    console.log(newOrder);

    setModalActive(true);

    dispatch(deleteAllProductsAction());

    e.target.reset();
  }

  return (
    <form className={s.order_form} onSubmit={submit}>
      <h2>Order details:</h2>
      <p>Total amount: {totalSum}$ </p>
      <p>Items count: {cartCount} </p>
      <input type='text' placeholder='Your name' name='name' />
      <input type='text' placeholder='Your email' name='email' />
      <button>Order</button>
    </form>
  )
}
