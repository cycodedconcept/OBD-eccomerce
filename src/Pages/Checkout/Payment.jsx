import React from 'react'
import './checkout.css'

const Payment = () => {
  return (
    <React.Fragment>
      <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
          <center className='mb-5'>
                <div className="progress-section custom-w-50">
                    <div className="stepper-wrapper">
                        <div className="stepper-item completed active">
                            <div className="step-counter">1</div>
                            <div className="step-name">Address</div>
                        </div>
                        <div className="stepper-item completed">
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
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </React.Fragment>
  )
}

export default Payment
