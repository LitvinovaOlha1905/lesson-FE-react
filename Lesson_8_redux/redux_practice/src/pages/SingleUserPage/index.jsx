import React, { useEffect } from 'react'
import { getSingleUser } from '../../requests/users'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function SingleUserPage() {

  const { user_id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleUser(user_id))
  }, [dispatch, user_id]);

  const singleUserState = useSelector(state => state.singleUser);

  const { name, username, address, phone, company } = singleUserState;

  const { street, city, suite, zipcode } = address || {};

  return (
    <div>
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <p>Phone: {phone}</p>
      {address && <p>Address: {zipcode} {city}, {street}, {suite} </p>}
      {company && <p>Company: {company.name}, {company.catchPhrase}</p>}
    </div>
  )
}
