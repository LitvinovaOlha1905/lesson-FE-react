import React from 'react'
import UserCard from '../UserCard'
import { usersData } from '../../data/users_data'

export default function UsersContainer() {
  return (
    <div>
      {
        // usersData.map(el => <UserCard firstname={el.firstname} lastname={el.lastname} age={el.age} likes={el.likes} />)

        usersData.map(el => <UserCard {...el} key={el.id} />)
      }
    </div>
  )
}
