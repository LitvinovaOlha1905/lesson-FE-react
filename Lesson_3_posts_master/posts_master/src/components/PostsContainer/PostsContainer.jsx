import React from 'react'
import Post from '../Post/Post'

export default function PostsContainer({ posts, changeLike, deletePost, addNewComment, deleteComment, deleteAllComments }) {
  return (
    <div>
      {
        posts.map(el => <Post key={el.id} {...el} changeLike={changeLike} deletePost={deletePost} addNewComment={addNewComment} deleteComment={deleteComment} deleteAllComments={deleteAllComments} />)
      }
    </div>
  )
}
