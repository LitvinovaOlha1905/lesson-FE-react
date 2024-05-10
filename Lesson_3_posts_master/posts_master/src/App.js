import { useEffect, useState } from 'react';
import './App.css';
import PostsContainer from './components/PostsContainer/PostsContainer';
import { postsData } from './data/postsData';
import AddPostForm from './components/AddPostForm/AddPostForm';

function App() {

  const [ posts, setPosts ] = useState(JSON.parse(localStorage.getItem('posts')) || postsData);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts]);

  const changeLike = id => {
    // 1. Найти post, на который было кликнуто, по id
    const targetPost = posts.find(el => el.id === id);

    // 2. У найденного поста обратиться к свойству like и поменять значение на противоположное
    targetPost.like = targetPost.like ? false : true;

    // 3. Передать в setPosts обновленное состояние
    setPosts([...posts])
  }

  const deletePost = (id) => {
    setPosts(posts.filter(el => el.id !== id))
  }

  const addNewPost = new_post => {
    setPosts([...posts, new_post])
  }

  const addNewComment = (new_comment, post_id) => {
    // 1. Найти пост по айди
    const targetPost = posts.find(el => el.id === post_id);

    // 2. У найденного поста обращаемся к свойству comments и добавляем (пушим) в него new_comment
    targetPost.comments.push(new_comment);

    // 3. Передаем в setPosts обновленное состояние
    setPosts([...posts])
  }

  const deleteComment = (post_id, comment_id) => {
    // 1. Найти пост по post_id
    const targetPost = posts.find(el => el.id === post_id);

    // 2. У найденного поста обратиться к массиву comments и передать в качестве значения новый/отфильтрованный массив. В новый массив попадают все объекты, кроме того, у которого айди совпал с comment_id
    targetPost.comments = targetPost.comments.filter(el => el.id !== comment_id);

    // 3. Передать в setPosts обновленное состояние
    setPosts([...posts])
  }

  // Путь для deleteComment
  // App - PostsContainer - Post - CommentsBlock - CommentsContainer - Comment

  const deleteAllComments = (post_id) => {
    // 1. Найти пост по post_id
    const targetPost = posts.find(el => el.id === post_id);

    // 2. У найденного поста обратиться к массиву comments и передать в качестве значения []
    targetPost.comments = [];

    // 3. Передать в setPosts обновленное состояние
    setPosts([...posts]);
  }

  // Путь для deleteAllComments
  // App - PostsContainer - Post - CommentsBlock 

  return (
    <div>
      <AddPostForm addNewPost={addNewPost} />
      <PostsContainer posts={posts} changeLike={changeLike} deletePost={deletePost} addNewComment={addNewComment} deleteComment={deleteComment} deleteAllComments={deleteAllComments} />
    </div>
  );
}

export default App;
