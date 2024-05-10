import React from 'react'

export default function UserCard({ firstname, lastname, age, likes }) {

  // const { firstname, lastname, age, likes } = props;

  return (
    <div>
      <p>Name: {firstname} {lastname}</p>
      <p>Age: {age}</p>
      <p>Likes: {likes}</p>
    </div>
  )
}
