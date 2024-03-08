import React, { useState } from 'react'
import './checkout.css'
import { Image } from '../../assets'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Checkout = () => {
    const [selectedState, setSelectedState] = useState('');

    const handleStateChange = (event) => {
        setSelectedState(event.target.value)
    }

    const states = [
        'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 
        'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa', 
        'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 
        'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
    ];
  return (
    <React.Fragment>
      <div className="row mt-5">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
              <center className='mb-5'>
                <div className="progress-section custom-w-50">
                    <div className="stepper-wrapper">
                        <div className="stepper-item completed active">
                            <div className="step-counter">1</div>
                            <div className="step-name">Address</div>
                        </div>
                        <div className="stepper-item">
                            <div className="step-counter">2</div>
                            <div className="step-name color">Payment</div>
                        </div>
                        <div className="stepper-item">
                            <div className="step-counter">3</div>
                            <div className="step-name color">Confirmation</div>
                        </div>
                    </div>
                </div>
              </center>
              

              <div className="checkout-form">
                  <center>
                   <form className='order-form custom-w-75'>
                        <div className="form-group mb-5">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter House Address'/>
                        </div>

                        <div className="form-group">
                            <select name="" id="" value={ selectedState } onChange={ handleStateChange } className="form-control">
                                <option value="">Select a state</option>
                                {states.map((item, index) => (
                                    <option key={index} value={ item }>{ item }</option>
                                ))}
                            </select>
                        </div>
                  </form>
                  </center>
                  
                  
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>

      <div className="row mt-5">
          <div className="col-sm-12 col-md-12 col-lg-2"></div>
          <div className="col-sm-12 col-md-12 col-lg-8">
            <div className="order-details-section mb-5">
                <h5>Order ID: # 99012</h5>
            </div>
            <div className="order-item d-flex justify-content-between my-3 p-3">
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
              <div className="order-item d-flex justify-content-between my-3 p-3">
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
              <div className="order-price d-flex justify-content-between mt-5">
                  <h5>Total: </h5>
                  <h5>220,000 NGN</h5>
              </div>

              <div className='text-center my-5'>
                 <button className='order-btn3'>Proceed</button>
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-2"></div>
      </div>
    </React.Fragment>
  )
}

export default Checkout
