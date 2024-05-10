import { useEffect } from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import TasksContainer from './components/TasksContainer';
import { fetchTasks } from './store/slices/tasksSlice';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks())
  }, []);

  return (
    <div>
      <AddTaskForm />
      <TasksContainer />
    </div>
  );
}

export default App;
