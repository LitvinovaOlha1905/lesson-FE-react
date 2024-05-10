import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu';
import MainPage from './pages/MainPage';
import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/products' element={<ProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
