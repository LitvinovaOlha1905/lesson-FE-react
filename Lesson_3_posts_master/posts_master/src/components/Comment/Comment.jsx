import React from 'react'
import s from './Comment.module.css'

export default function Comment({ id, text, post_id, deleteComment }) {

  // const comment_style = {
  //   color: text.length > 8 ? 'green' : 'red'
  // }

  return (
    <div 
      className={s.comment}
      onClick={() => deleteComment(post_id, id)}
    >
      { text }
    </div>
  )
}

// post_id перебрасываем из Post
// deleteComment перебрасываем из App
// id - айди комментария
