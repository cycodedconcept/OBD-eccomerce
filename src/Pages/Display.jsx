import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Product from './Products/Product';
import Details from './Details/Details';
import Save from './Save/Save';
import Cart from './Cart/Cart';
import Order from './Order/Order';
import Checkout from './Checkout/Checkout';
import Payment from './Checkout/Payment'
import Confirmation from './Checkout/Confirmation';
import Registration from '../Profile/Registration/Registration';
import Login from '../Profile/Login/Login';
import Verify from '../Profile/Registration/Verify';
import VerifyStatus from '../Profile/Registration/VerifyStatus';




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
      <Route path='checkout' element={<Checkout />} />
      <Route path='/form' element={<Registration />} />
      <Route path='/login' element={<Login />} />
      <Route path='/verify' element={<Verify />} />
      <Route path='/verify/status' element={<VerifyStatus />} />
      <Route path='checkout/payment' element={<Payment />} />
      <Route path='checkout/confirmation' element={<Confirmation />} />
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default Display
