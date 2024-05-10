import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem';
import { deleteAllProductsAction } from '../../store/reducers/cartReducer';

export default function CartItemsContainer() {

  const cartState = useSelector(store => store.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartState))
  }, [cartState]);

  return (
    <div>
      <div>
        {
          cartState.map(el => <CartItem key={el.id} {...el} />)
        }
      </div>

      <button onClick={() => dispatch(deleteAllProductsAction())}>
        CLEAR CART
      </button>
    </div>
  )
}
