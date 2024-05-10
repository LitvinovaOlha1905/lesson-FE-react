import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function NavMenu() {
  return (
    <div className={s.nav_menu}>
      <Link to='/'>Main</Link>
      <Link to='/users'>Users</Link>
      <Link to='/products'>Products</Link>
    </div>
  )
}
