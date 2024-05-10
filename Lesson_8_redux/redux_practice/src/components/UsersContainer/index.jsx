import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../requests/users';
import UserCard from '../UserCard';

export default function UsersContainer() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers)
  }, []);

  const usersState = useSelector(store => store.users);

  return (
    <div>
      {
        usersState.map(el => <UserCard key={el.id} {...el} />)
      }
    </div>
  )
}
