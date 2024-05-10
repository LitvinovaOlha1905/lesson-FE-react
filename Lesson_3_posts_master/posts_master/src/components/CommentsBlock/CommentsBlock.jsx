import React from 'react'
import CommentsContainer from '../CommentsContainer/CommentsContainer'
import AddCommentForm from '../AddCommentForm/AddCommentForm'
// import AddCommentForm from '../AddCommentForm' - если файл называется index.jsx

export default function CommentsBlock({ comments, post_id, addNewComment, deleteComment, deleteAllComments }) {
  return (
    <div>
      <CommentsContainer comments={comments} post_id={post_id} deleteComment={deleteComment} />
      <button onClick={() => deleteAllComments(post_id)}>
        Delete all comments
      </button>
      <AddCommentForm post_id={post_id} addNewComment={addNewComment} />
    </div>
  )
}
