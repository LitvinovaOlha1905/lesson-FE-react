import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from '../TaskItem';
import s from './index.module.css'
import { delete_all_tasks } from '../../store/slices/tasksSlice';

export default function TasksContainer() {

  const tasksState = useSelector(({tasks}) => tasks);

  const dispatch = useDispatch();

  return (
    <div>
      {
        tasksState.status === 'loading'
        ? <p>Tasks are loading...</p>
        : <div className={s.tasks_container}>
            {
              tasksState.list.map(el => <TaskItem key={el.id} {...el} />)
            }
          </div>
      }

      <button onClick={() => dispatch(delete_all_tasks())}>
        Delete all tasks
      </button>
    </div>
    
  )
}
