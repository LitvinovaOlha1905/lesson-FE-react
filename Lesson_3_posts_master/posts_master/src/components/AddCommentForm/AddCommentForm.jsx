import React from 'react'

export default function AddCommentForm({ post_id, addNewComment }) {

  const addComment = event => {
    event.preventDefault();

    const { comment } = event.target;

    const new_comment = {
      id: Date.now(),
      text: comment.value
    }

    addNewComment(new_comment, post_id);
    // post_id - айди поста, взять из Post

    event.target.reset()
  }

  return (
    <form onSubmit={addComment}>
      <input type='text' placeholder='Your comment...' name='comment' />
      <button>Add comment</button>
    </form>
  )
}
