import React from 'react'

export default function TodoCard({ title, completed }) {
  return (
    <div>
      <p>Task: { title }</p>
      <p>Status: { completed ? 'done' : 'not done' }</p>
    </div>
  )
}
