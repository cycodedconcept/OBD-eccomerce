import React from 'react'
import './cart.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import { Image2 } from '../../assets'


const Cart = () => {
  return (
    <React.Fragment>
      <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
              <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-8">
                    <div className="cart-image">
                        <img src={ Image2 } alt="" className='w-75'/>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="cart-card-body">
                        <h5>Headache Band</h5>
                        <div className="cart-row d-flex justify-content-between">
                          <p>₦1000</p>

                          <div>
                            <FontAwesomeIcon icon={ faPlus } className="fa-item"/>
                            <span className='p-5 m-0'>1</span>
                            <FontAwesomeIcon icon={ faMinus } className="fa-item"/>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </React.Fragment>
  )
}

export default Cart
