import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsByCategory } from '../../requests/products';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard';
import s from './index.module.css'
import { resetStatusAction } from '../../store/reducers/productsByCategoryReducer';

export default function ProductsContainer() {

  const { category_name } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetStatusAction());
    dispatch(getProductsByCategory(category_name))
  }, []);

  const productsByCategoryState = useSelector(store => store.productsByCategory);

  const { status, data } = productsByCategoryState;

  return (
    <div>
      {
        status === 'loading'
        ? <p>Loading...</p>
        : <div className={s.container}>
            {
              data.map(el => <ProductCard key={el.id} {...el} />)
            }
          </div>
      }
    </div> 
  )
}
