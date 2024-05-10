import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import MainPage from './pages/MainPage';
import PlacesPage from './pages/PlacesPage';
import UsersPage from './pages/UsersPage';
import TodosPage from './pages/TodosPage';
import SingleUserPage from './pages/SingleUserPage';

function App() {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/places' element={<PlacesPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/todos' element={<TodosPage />} />
        <Route path='/user/:user_id' element={<SingleUserPage />} />
      </Routes>
    </div>
  );
}

export default App;
