import React from 'react'
import './order.css'
import { Check, Image } from '../../assets'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Order = () => {
  return (
    <React.Fragment>
      <div className="row mt-5">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
              <div className="top-section">
                  <h5>Order ID: <span> # 99012</span></h5>

                  <div className="order-flow d-flex justify-content-between">
                     <h5 className='mt-2'>Order date: <span> 29 Nov 2022 </span></h5>
                     <button className='order-btn'>Delivered <img src={ Check } alt="img"/></button>
                  </div>
              </div>

              <div className="order-price d-flex justify-content-between mt-5">
                  <h5>Total: </h5>
                  <h5>110,000 NGN</h5>
              </div>

              <div className="order-item d-flex justify-content-between mt-5">
                  <div className="order-image">
                      <img src={ Image } alt=""/>
                  </div>

                  <div className="order-info">
                      <p>Omron HEM-8712</p>
                      <p>BP Monitor</p>
                      <h5>110,000NGN</h5>
                  </div>
                  <div className="order-quantity">
                      <p>QTY <span className='ml-3'>1</span></p>
                      <button className='order-btn2'>Rate it <FontAwesomeIcon icon={ faArrowRight } className="ml-3" style={{ color: '#376298'}}/></button>
                  </div>
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </React.Fragment>
  )
}

export default Order
