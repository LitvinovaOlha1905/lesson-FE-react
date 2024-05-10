import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function UserCard({ id, name, username, email }) {
  return (
    <Link to={`/user/${id}`}>
      <div className={s.card}>
        <p>Name: { name }</p>
        <p>Username: { username }</p>
        {/* <a href={`mailto:${email}`}>{ email }</a> */}
      </div>
    </Link> 
  )
}
