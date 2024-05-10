import React from 'react'
import Comment from '../Comment/Comment'

export default function CommentsContainer({ comments, post_id, deleteComment }) {
  return (
    <div>
      {
        comments.map(el => <Comment key={el.id} {...el} post_id={post_id} deleteComment={deleteComment} />)
      }
    </div>
  )
}
