import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Product from './Products/Product';
import Details from './Details/Details';
import Save from './Save/Save';
import Cart from './Cart/Cart';
import Order from './Order/Order';


const Display = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Navigation />
      <Routes>
      <Route index element={<Product />} />
      <Route path='details' element={<Details />} />
      <Route path='save' element={<Save />} />
      <Route path='cart' element={<Cart />} />
      <Route path='order' element={<Order />} />
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default Display
