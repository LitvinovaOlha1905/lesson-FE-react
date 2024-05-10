import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavMenu from './components/Navmenu';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import NotFoundPage from './pages/NotFoundPage';
import { getAllCategories } from './requests/categories';
import { useEffect, useState } from 'react';
import { Context } from './context';
import ProductsByCategoryPage from './pages/ProductsByCategoryPage';
import RecipesPage from './pages/RecipesPage';
import SingleRecipePage from './pages/SingleRecipePage';

function App() {

  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    getAllCategories(setCategories)
  }, []);

  return (
    <div>
      <Context.Provider value={{ categories }}>
        <NavMenu />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/categories' element={<CategoriesPage />} />
          <Route path='/products/:category_id' element={<ProductsByCategoryPage />} />
          <Route path='/recipes' element={<RecipesPage />} />
          <Route path='/recipe/:recipe_id' element={<SingleRecipePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
