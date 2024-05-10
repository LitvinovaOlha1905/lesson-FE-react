import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsByCategoryPage from './pages/ProductsByCategoryPage';
import SingleProductPage from './pages/SingleProductPage';
import CartPage from './pages/CartPage';
import ModalWindow from './components/ModalWindow';
import { useState } from 'react';
import { Context } from './context';

function App() {

  const [ modalActive, setModalActive ] = useState(false);
  const [ nightMode, setNightMode ] = useState(false);

  return (
    <div className={['app', nightMode ? 'night_mode' : ''].join(' ')}>
      <Context.Provider value={{ modalActive, setModalActive, nightMode, setNightMode }}>
        <ModalWindow 
          text1='Thank you for your order!' 
          text2='Our manager will contact you soon :)'
        />
        <NavMenu />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/categories' element={<CategoriesPage />} />
          <Route path='/category/:category_name' element={<ProductsByCategoryPage />} />
          <Route path='/product/:product_id' element={<SingleProductPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
