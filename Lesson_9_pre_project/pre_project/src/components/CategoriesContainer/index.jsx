import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../../requests/categories';
import CategoryCard from '../CategoryCard';

export default function CategoriesContainer() {

  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllCategories), []);

  const categoriesState = useSelector(store => store.categories);

  return (
    <div>
      {
        categoriesState.map(el => <CategoryCard key={el} category={el} />)
      }
    </div>
  )
}
