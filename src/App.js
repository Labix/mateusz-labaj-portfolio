import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

import Nav from './Components/Nav';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Eshop from './Components/Projects/E-shop/Eshop';
import Snake from './Components/Projects/SnakeGame2/Game';
import Cart from './Components/Projects/E-shop/Pages/Cart';
import Login from './Components/Projects/E-shop/Pages/Login';
import Register from './Components/Projects/E-shop/Pages/Register';
import Product from './Components/Projects/E-shop/Pages/Product';
import ProductList from './Components/Projects/E-shop/Pages/ProductList';
import ProductListMan from './Components/Projects/E-shop/Pages/ProductListMan';
import ProductListWoman from './Components/Projects/E-shop/Pages/ProductListWoman';
import ProductListBoy from './Components/Projects/E-shop/Pages/ProductListBoy';
import ProductListGirl from './Components/Projects/E-shop/Pages/ProductListGirl';

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/eshop' element={<Eshop/>} />
        <Route path='/eshop/cart' element={<Cart/>}/>
        <Route path='/eshop/login' element={<Login/>}/>
        <Route path='/eshop/register' element={<Register/>}/>
        <Route path='/eshop/product' element={<Product/>}/>
        <Route path='/eshop/productlist' element={<ProductList/>}/>
        <Route path='/eshop/productlistman' element={<ProductListMan/>}/>
        <Route path='/eshop/productlistWoman' element={<ProductListWoman/>}/>
        <Route path='/eshop/productlistBoy' element={<ProductListBoy/>}/>
        <Route path='/eshop/productlistGirl' element={<ProductListGirl/>}/>
        <Route path='/snake' element={<Snake/>}/>
      </Routes>
    </Router>
  );
}

export default App;
