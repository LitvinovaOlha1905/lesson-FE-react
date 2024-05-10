import React from 'react'
import { useSelector } from 'react-redux'
import UserCard from '../UserCard';

export default function UsersContainer() {

  const usersState = useSelector(store => store.users);

  return (
    <div>
      {
        usersState.map(el => <UserCard key={el.id} {...el} />)
      }
    </div>
  )
}
