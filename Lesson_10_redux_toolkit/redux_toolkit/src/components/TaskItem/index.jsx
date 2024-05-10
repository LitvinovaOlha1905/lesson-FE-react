import React from 'react'
import s from './index.module.css'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { change_status, delete_task } from '../../store/slices/tasksSlice';

export default function TaskItem({ id, title, completed }) {

  const status = completed ? 'done' : 'not done';

  const card_style = {
    backgroundColor: completed ? 'lightgreen' : 'lightpink'
  }

  const dispatch = useDispatch();

  const deleteTask = e => {
    e.stopPropagation();
    dispatch(delete_task(id));
  }

  return (
    <div 
      className={s.task_card} 
      style={card_style}
      onClick={() => dispatch(change_status(id))}
    >
      <IoIosCloseCircleOutline 
        onClick={deleteTask}
      />
      <p>Task: { title }</p>
      <p>Status: { status }</p>
    </div>
  )
}
