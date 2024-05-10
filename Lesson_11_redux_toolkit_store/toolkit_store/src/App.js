import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import NavMenu from './components/NavMenu';

function App() {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
