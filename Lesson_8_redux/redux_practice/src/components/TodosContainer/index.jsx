import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../../requests/todos';
import TodoCard from '../TodoCard';

export default function TodosContainer() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos)
  }, []);

  const todosState = useSelector(store => store.todos);

  return (
    <div>
      {
        todosState.map(el => <TodoCard key={el.id} {...el} />)
      }
    </div>
  )
}
