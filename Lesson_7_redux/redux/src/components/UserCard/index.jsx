import React from 'react'
import { decrAgeAction, deleteUserAction, incrAgeAction } from '../../store/reducers/usersReducer'
import { useDispatch } from 'react-redux'

export default function UserCard({ id, firstname, lastname, age }) {

  const dispatch = useDispatch();

  return (
    <div>
      <span onClick={() => dispatch(deleteUserAction(id))}>
        X
      </span>
      <p>Name: {firstname} {lastname}</p>
      <p>Age: { age }</p>
      <div>
        <button
          onClick={() => dispatch(decrAgeAction(id))}
        >
          -
        </button>
        <button 
          onClick={() => dispatch(incrAgeAction(id))}
        >
          +
        </button>
      </div>
    </div>
  )
}
