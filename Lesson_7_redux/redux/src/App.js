import './App.css';
import AddUserForm from './components/AddUserForm';
import ProductsContainer from './components/ProductsContainer';
import UsersContainer from './components/UsersContainer';

function App() {
  return (
    <div>
      <AddUserForm />
      <UsersContainer />
      
      <br />
      <br />
      <br />

      <ProductsContainer />
    </div>
  );
}

export default App;
