import React from 'react'
import { FaHeart } from "react-icons/fa6";
import s from './Post.module.css'
import { RxCross1 } from "react-icons/rx";
import CommentsBlock from '../CommentsBlock/CommentsBlock';

export default function Post({ id, title, description, like, comments, changeLike, deletePost, addNewComment, deleteComment, deleteAllComments }) {

  const heart_style = {
    color: like ? 'red' : 'gray'
  }

  const post_style = {
    backgroundColor: comments.length > 0 ? 'lightblue' : 'lightpink'
  }

  return (
    <div className={s.post} style={post_style}>
      <RxCross1 onClick={() => deletePost(id)} />
      <FaHeart 
        style={heart_style} 
        className={s.heart_icon} 
        onClick={() => changeLike(id)}
      />
      <h3>{ title }</h3>
      <p>{ description }</p>
      <CommentsBlock comments={comments} post_id={id} addNewComment={addNewComment} deleteComment={deleteComment} deleteAllComments={deleteAllComments} />
    </div>
  )
}
