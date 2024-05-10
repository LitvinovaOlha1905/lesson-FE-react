import React from 'react'

export default function AddPostForm({ addNewPost }) {

  const addPost = event => {
    event.preventDefault();

    const { title, description } = event.target;

    const new_post = {
      id: Date.now(),
      title: title.value,
      description: description.value,
      like: false,
      comments: []
    }

    addNewPost(new_post);

    event.target.reset()
  }

  return (
    <form onSubmit={addPost}>
      <input type='text' placeholder='Your title' name='title' />
      <input type='text' placeholder='Your text' name='description' />
      <button>Add post</button>
    </form>
  )
}
