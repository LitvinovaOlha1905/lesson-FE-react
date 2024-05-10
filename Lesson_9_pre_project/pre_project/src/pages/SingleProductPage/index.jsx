import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getSingleProduct } from '../../requests/products';
import { resetSingleStatusAction } from '../../store/reducers/singleProductReducer';
import { addToCartAction } from '../../store/reducers/cartReducer';

export default function SingleProductPage() {

  const dispatch = useDispatch();

  const { product_id } = useParams();

  useEffect(() => {
    dispatch(resetSingleStatusAction());
    dispatch(getSingleProduct(product_id))
  }, [dispatch, product_id]);

  const singleProductState = useSelector(store => store.singleProduct);

  const { status, data } = singleProductState;

  const { id, image, title, price, category } = data;

  return (
    <div>
      {
        status === 'loading'
        ? <p>Loading...</p>
        : <div>
            <img src={image} alt={title} />
            <p>{ title }</p>
            <p>{ price }$</p>
            <Link to={`/category/${category}`}>{ category }</Link>
            <button onClick={() => dispatch(addToCartAction({ id, image, title, price }))}>
              ADD TO CART
            </button>
          </div>
      }
    </div>
  )
}
