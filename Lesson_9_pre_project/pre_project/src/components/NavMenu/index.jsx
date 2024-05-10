import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { FaToggleOff } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
import { Context } from '../../context';

export default function NavMenu() {

  const cartState = useSelector(store => store.cart);
  const cartCount = cartState.reduce((acc, el) => acc + el.count, 0);

  const { nightMode, setNightMode } = useContext(Context);

  return (
    <div className={s.navMenu}>
      <Link to='/'>Main</Link>
      <Link to='/categories'>Categories</Link>
      <Link to='/cart'>
        <FaCartShopping />
        {
          cartState.length === 0
          ? ''
          : <span>{cartCount}</span>
        } 
      </Link>
      {
        nightMode
        ? <FaToggleOn onClick={() => setNightMode(false)} />
        : <FaToggleOff onClick={() => setNightMode(true)} />
      }
    </div>
  )
}
