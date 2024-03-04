import React from 'react'
import './cart.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faTrash, faStar } from '@fortawesome/free-solid-svg-icons'

import { Image2, Love, Image } from '../../assets'


const Cart = () => {
  return (
    <React.Fragment>
      <div className="row mt-5">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="d-flex justify-content-between cart-over px-5 mb-3">
                    <div className="cart-image">
                        <img src={ Image2 } alt="" className='w-100'/>
                    </div>
                    <div className="cart-card-body mt-5">
                        <h5 className='mb-3'>Headache Band</h5>
                        <div className="cart-row d-flex justify-content-between mb-3">
                            <p className='mt-1 mr-5'>₦1000</p>
                            <div>
                                <FontAwesomeIcon icon={ faPlus } className="fa-item"/>
                                <span className='p-5 m-0'>1</span>
                                <FontAwesomeIcon icon={ faMinus } className="fa-item"/>
                            </div>
                        </div>
                        <button className='cart-btn'><FontAwesomeIcon icon={ faTrash }/> Remove</button>
                    </div>
            </div>

            <div className="d-flex justify-content-between cart-over px-5 mb-3">
                    <div className="cart-image">
                        <img src={ Image2 } alt="" className='w-100'/>
                    </div>
                    <div className="cart-card-body mt-5">
                        <h5 className='mb-3'>Headache Band</h5>
                        <div className="cart-row d-flex justify-content-between mb-3">
                            <p className='mt-1 mr-5'>₦1000</p>
                            <div>
                                <FontAwesomeIcon icon={ faPlus } className="fa-item"/>
                                <span className='p-5 m-0'>1</span>
                                <FontAwesomeIcon icon={ faMinus } className="fa-item"/>
                            </div>
                        </div>
                        <button className='cart-btn'><FontAwesomeIcon icon={ faTrash }/> Remove</button>
                    </div>
            </div>
            <div className="d-flex justify-content-between cart-over px-5 mb-3">
                    <div className="cart-image">
                        <img src={ Image2 } alt="" className='w-100'/>
                    </div>
                    <div className="cart-card-body mt-5">
                        <h5 className='mb-3'>Headache Band</h5>
                        <div className="cart-row d-flex justify-content-between mb-3">
                            <p className='mt-1 mr-5'>₦1000</p>
                            <div>
                                <FontAwesomeIcon icon={ faPlus } className="fa-item"/>
                                <span className='p-5 m-0'>1</span>
                                <FontAwesomeIcon icon={ faMinus } className="fa-item"/>
                            </div>
                        </div>
                        <button className='cart-btn'><FontAwesomeIcon icon={ faTrash }/> Remove</button>
                    </div>
            </div>
            <div className="d-flex justify-content-between cart-over px-5 mb-3">
                    <div className="cart-image">
                        <img src={ Image2 } alt="" className='w-100'/>
                    </div>
                    <div className="cart-card-body mt-5">
                        <h5 className='mb-3'>Headache Band</h5>
                        <div className="cart-row d-flex justify-content-between mb-3">
                            <p className='mt-1 mr-5'>₦1000</p>
                            <div>
                                <FontAwesomeIcon icon={ faPlus } className="fa-item"/>
                                <span className='p-5 m-0'>1</span>
                                <FontAwesomeIcon icon={ faMinus } className="fa-item"/>
                            </div>
                        </div>
                        <button className='cart-btn'><FontAwesomeIcon icon={ faTrash }/> Remove</button>
                    </div>
            </div>

            <div className="checkout text-center mt-5">
                <button className='check-btn'>Check out ₦400,000</button>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
      <div className="row mb-5 mt-5">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="description">
            <p className='mb-3'>Customers also view</p>
            <div className="row">
              <div className="col-sm-12 col-col-md-12 col-lg-3">
                <div className="box">
                  <div className="box-head">
                    <img src={ Love } alt="" />
                  </div>
                  <div className="box-body text-center mb-3">
                    <img src={ Image } alt="" />
                    <p>Hydraulic Jack</p>
                  </div>
                  <div className="box-price d-flex justify-content-between">
                    <p>₦1000</p>
                    <p>4.8 <FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                  </div>
                  <div className="box-footer mt-3">
                    <button className='box-btn'>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-col-md-12 col-lg-3">
                <div className="box">
                  <div className="box-head">
                    <img src={ Love } alt="" />
                  </div>
                  <div className="box-body text-center mb-3">
                    <img src={ Image } alt="" />
                    <p>Hydraulic Jack</p>
                  </div>
                  <div className="box-price d-flex justify-content-between">
                    <p>₦1000</p>
                    <p>4.8 <FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                  </div>
                  <div className="box-footer mt-3">
                    <button className='box-btn'>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-col-md-12 col-lg-3">
                <div className="box">
                  <div className="box-head">
                    <img src={ Love } alt="" />
                  </div>
                  <div className="box-body text-center mb-3">
                    <img src={ Image } alt="" />
                    <p>Hydraulic Jack</p>
                  </div>
                  <div className="box-price d-flex justify-content-between">
                    <p>₦1000</p>
                    <p>4.8 <FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                  </div>
                  <div className="box-footer mt-3">
                    <button className='box-btn'>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-col-md-12 col-lg-3">
                <div className="box">
                  <div className="box-head">
                    <img src={ Love } alt="" />
                  </div>
                  <div className="box-body text-center mb-3">
                    <img src={ Image } alt="" />
                    <p>Hydraulic Jack</p>
                  </div>
                  <div className="box-price d-flex justify-content-between">
                    <p>₦1000</p>
                    <p>4.8 <FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                  </div>
                  <div className="box-footer mt-3">
                    <button className='box-btn'>Add to cart</button>
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
