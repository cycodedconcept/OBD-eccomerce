import React from 'react'
import './checkout.css'
import { Card, Visa, Mc, Pay } from '../../assets'


const Payment = () => {
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
                        <div className="stepper-item completed active">
                            <div className="step-counter">2</div>
                            <div className="step-name">Payment</div>
                        </div>
                        <div className="stepper-item">
                            <div className="step-counter">3</div>
                            <div className="step-name color">Confirmation</div>
                        </div>
                    </div>
                </div>
              </center>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-2"></div>
        <div className="col-sm-12 col-md-12 col-lg-8">
          <div className="profile-section text-center">
            <img src={ Card } alt=""/>
          </div>

          <p className='my-5' style={{ color: '#75898C'}}>Add card</p>
          <div className="payment-img text-center">
            <img src={ Visa } alt="" />
            <img src={ Mc } alt="" />
            <img src={ Pay } alt="" />
          </div>

          <form className='order-form custom-w-100 my-5'>
            <div className="form-group mb-5">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Noman Manzoor'/>
            </div>
            <div className="form-group mb-5">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='**** **** **** 2345'/>
            </div>
            <div className="form-group mb-5">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='02/30'/>
            </div>
            <div className="form-group mb-5">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='000'/>
            </div>

            <div className="checkout text-center mt-5">
                <button className='check-btn'>Check out ₦400,000</button>
            </div>
          </form>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-2"></div>
      </div>
    </React.Fragment>
  )
}

export default Payment
