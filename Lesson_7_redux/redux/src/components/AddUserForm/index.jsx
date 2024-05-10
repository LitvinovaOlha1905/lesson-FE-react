import React from 'react'
import { addUserAction } from '../../store/reducers/usersReducer';
import { useDispatch } from 'react-redux';

export default function AddUserForm() {

  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();

    const { firstname, lastname, age } = e.target;

    const new_user = {
      id: Date.now(),
      firstname: firstname.value,
      lastname: lastname.value,
      age: age.value
    }

    dispatch(addUserAction(new_user));

    e.target.reset()
  }

  return (
    <form onSubmit={submit}>
      <input type='text' placeholder='Firstname' name='firstname' />
      <input type='text' placeholder='Lastname' name='lastname' />
      <input type='text' placeholder='Age' name='age' />
      <button>Add user</button>
    </form>
  )
}
