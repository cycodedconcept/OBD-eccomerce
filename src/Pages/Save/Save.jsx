import React from 'react'
import { Image2, Shopping, Love, Image } from '../../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

import './save.css'


const Save = () => {
  return (
    <React.Fragment>
      <div className="row mt-5">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
              <div className="save-item-session mb-3">
                  <div className="save-card d-flex justify-content-between">
                      <div className="save-image">
                          <img src={ Image2 } alt="" className='w-75'/>
                      </div>
                      <div className="save-card-body">
                          <p>Headache Band</p>
                          <p>₦1000</p>
                          <p><FontAwesomeIcon icon={ faTrash } style={{backgroundColor: '#FF3B3B', padding: '13px', color: '#FFF', borderRadius: '20px'}}/></p>
                      </div>
                      <div className="save-star mt-4">
                          <div className="save-rating d-flex ml-5">
                            <p className='mr-2'><FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                            <p className='mr-2'><FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                            <p className='mr-2'><FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                            <p className='mr-2'><FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                            <p className='mr-2'><FontAwesomeIcon icon={ faStarHalfAlt } style={{color: "#FFCC00"}}/></p>
                          </div>
                          <button className='save-btn'><img src={ Shopping } alt="" className='mr-3'/>Add to cart</button>
                      </div>
                  </div>
              </div>
              <div className="save-item-session mb-3">
                  <div className="save-card d-flex justify-content-between">
                      <div className="save-image">
                          <img src={ Image2 } alt="" className='w-75'/>
                      </div>
                      <div className="save-card-body">
                          <p>Headache Band</p>
                          <p>₦1000</p>
                          <p><FontAwesomeIcon icon={ faTrash } style={{backgroundColor: '#FF3B3B', padding: '13px', color: '#FFF', borderRadius: '20px'}}/></p>
                      </div>
                      <div className="save-star mt-4">
                          <div className="save-rating d-flex ml-5">
                            <p className='mr-2'><FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                            <p className='mr-2'><FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                            <p className='mr-2'><FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                            <p className='mr-2'><FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                            <p className='mr-2'><FontAwesomeIcon icon={ faStarHalfAlt } style={{color: "#FFCC00"}}/></p>
                          </div>
                          <button className='save-btn'><img src={ Shopping } alt="" className='mr-3'/>Add to cart</button>
                      </div>
                  </div>
              </div>
              <div className="save-item-session mb-3">
                  <div className="save-card d-flex justify-content-between">
                      <div className="save-image">
                          <img src={ Image2 } alt="" className='w-75'/>
                      </div>
                      <div className="save-card-body">
                          <p>Headache Band</p>
                          <p>₦1000</p>
                          <p><FontAwesomeIcon icon={ faTrash } style={{backgroundColor: '#FF3B3B', padding: '13px', color: '#FFF', borderRadius: '20px'}}/></p>
                      </div>
                      <div className="save-star mt-4">
                          <div className="save-rating d-flex ml-5">
                            <p className='mr-2'><FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                            <p className='mr-2'><FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                            <p className='mr-2'><FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                            <p className='mr-2'><FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                            <p className='mr-2'><FontAwesomeIcon icon={ faStarHalfAlt } style={{color: "#FFCC00"}}/></p>
                          </div>
                          <button className='save-btn'><img src={ Shopping } alt="" className='mr-3'/>Add to cart</button>
                      </div>
                  </div>
              </div>
              <div className="save-item-session">
                  <div className="save-card d-flex justify-content-between">
                      <div className="save-image">
                          <img src={ Image2 } alt="" className='w-75'/>
                      </div>
                      <div className="save-card-body">
                          <p>Headache Band</p>
                          <p>₦1000</p>
                          <p><FontAwesomeIcon icon={ faTrash } style={{backgroundColor: '#FF3B3B', padding: '13px', color: '#FFF', borderRadius: '20px'}}/></p>
                      </div>
                      <div className="save-star mt-4">
                          <div className="save-rating d-flex ml-5">
                            <p className='mr-2'><FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                            <p className='mr-2'><FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                            <p className='mr-2'><FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                            <p className='mr-2'><FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                            <p className='mr-2'><FontAwesomeIcon icon={ faStarHalfAlt } style={{color: "#FFCC00"}}/></p>
                          </div>
                          <button className='save-btn'><img src={ Shopping } alt="" className='mr-3'/>Add to cart</button>
                      </div>
                  </div>
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

export default Save
