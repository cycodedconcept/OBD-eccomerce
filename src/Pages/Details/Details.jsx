import React from 'react'
import "./details.css"
import { Image2, Image, Love } from '../../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'



const Details = () => {
  return (
    <React.Fragment>
      <div className="row details-view">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-7">
                <div className="detail-img-section">
                  <img src={ Image2 } alt="" />
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-5">
                <div className="details-item">
                  <h3>Hydraulic Jack</h3>
                  <p>₦1000</p>
                  <small>Free Delivery to school campus only</small>
                </div>
                <div className="detail-rating d-flex">
                  <p className='mr-2'><FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                  <p className='mr-2'><FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                  <p className='mr-2'><FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                  <p className='mr-2'><FontAwesomeIcon icon={ faStar } style={{color: "#FFCC00"}}/></p>
                  <p className='mr-2'><FontAwesomeIcon icon={ faStarHalfAlt } style={{color: "#FFCC00"}}/></p>
                  <p>(4.8 ratings)</p>
                </div>
                <div className="detail-description mb-3">
                  <p>Description</p>
                  <small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien leo 
                    vitae, quis facilisis aliquam. Odio ipsum vel purus semper augue 
                    consequat nibh laoreet lobortis. Elit morbi nulla imperdiet sed pellentesque. 
                    Ipsum morbi faucibus orci erat. Ut tincidunt fusce nulla amet amet, amet mauris et. 
                    Lacus interdum nisi nibh rhoncus sed.
                  </small>
                </div>
                <div className="detail-description">
                  <p>How to use</p>
                  <small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien leo 
                    vitae, quis facilisis aliquam. Odio ipsum vel purus semper augue 
                    consequat nibh laoreet lobortis. Elit morbi nulla imperdiet sed pellentesque. 
                    Ipsum morbi faucibus orci erat. Ut tincidunt fusce nulla amet amet, amet mauris et. 
                    Lacus interdum nisi nibh rhoncus sed.
                  </small>
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

export default Details
