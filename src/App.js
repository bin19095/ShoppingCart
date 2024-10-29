import HomePage from './Pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Products from './Pages/Products/Products';
import Contact from './Pages/Contact';
import ViewProduct from './Components/Product/ViewProduct/ViewProduct';
import TopNavBar from './Components/Header/TopNavBar';
import CartPage from './Components/CartPage/CartPage';

function App() {
  return (
    <>
    <TopNavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={ <Products productTypes={null}/> } />
        <Route path="contact" element={ <Contact />} />
        <Route path="electronics" element = { <Products productTypes="electronics"/> } />
        <Route path="jewelery" element = { <Products productTypes="jewelery"/>} />
        <Route path="men's clothing" element = { <Products productTypes="men's clothing"/> } />
        <Route path="Women's clothing" element = {< Products productTypes="women's clothing"/> } />
        <Route path="products/:productId" element = { <ViewProduct /> } />
        <Route path="carts" element = { <CartPage />} />
        <Route 
        path="*" 
          element={ 
          <div className='text-center text-danger'>Page Not found</div>
          }
          />
      </Routes>
    </>
  );
}

export default App;
