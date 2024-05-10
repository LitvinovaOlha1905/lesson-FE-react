import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function NavMenu() {
  return (
    <nav className={s.nav_menu}>
      <Link to='/'>Main</Link>
      <Link to='/configurations'>Configurations</Link>
      <Link to='/teams'>Teams</Link>
    </nav>
  )
}
