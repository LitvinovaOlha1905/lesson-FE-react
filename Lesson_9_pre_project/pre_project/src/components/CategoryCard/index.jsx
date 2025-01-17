import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom';

export default function CategoryCard({ category }) {

  const category_up = category[0].toUpperCase() + category.slice(1);

  return (
    <Link to={`/category/${category}`}>
      <div className={s.card}>
        { category_up }
      </div>
    </Link>
  )
}
