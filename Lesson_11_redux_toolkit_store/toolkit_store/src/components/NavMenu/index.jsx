import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import { FaCartShopping } from "react-icons/fa6";
import { FaToggleOff } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";

export default function NavMenu() {

  const [ nightMode, setNightMode ] = useState(false);

  const back_styles = {
    backgroundColor: nightMode ? 'lightblue' : 'darkblue',
    color: nightMode ? 'black' : 'white'
  }

  return (
    <div className={s.navMenu} style={back_styles}>
      <Link to='/'>Main</Link>
      <Link to='/categories'>Categories</Link>
      <Link to='/cart'>
        <FaCartShopping />
      </Link>
      {
        nightMode
        ? <FaToggleOn onClick={() => setNightMode(false)} />
        : <FaToggleOff onClick={() => setNightMode(true)} />
      }
    </div>
  )
}
