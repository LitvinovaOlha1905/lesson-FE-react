import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function NavMenu() {
  return (
    <div className={s.navMenu}>
      <Link to='/'>Main</Link>
      <Link to='/places'>Places</Link>
      <Link to='/users'>Users</Link>
      <Link to='/todos'>Todos</Link>
    </div>
  )
}
