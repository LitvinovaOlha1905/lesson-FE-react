import React from 'react'
import CartItemsContainer from '../../components/CartItemsContainer'
import SendOrderForm from '../../components/SendOrderForm'
import s from './index.module.css'
import { useSelector } from 'react-redux';

export default function CartPage() {

  const cartState = useSelector(store => store.cart);

  return (
    <div>
      {
        cartState.length === 0 
        ? <p>No products added...</p>
        : <div className={s.cart_container}>
            <CartItemsContainer />
            <SendOrderForm />
          </div>
      }  
    </div>
  )
}
