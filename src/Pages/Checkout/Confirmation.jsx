import React from 'react'
import './checkout.css'

import { Success } from '../../assets'


const Confirmation = () => {
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
                        <div className="stepper-item completed active">
                            <div className="step-counter">3</div>
                            <div className="step-name color">Confirmation</div>
                        </div>
                    </div>
                </div>

                <div className="con-img mt-5">
                    <img src={ Success } alt=""/>

                    <h5 className='mt-5'>Payment Complete</h5>
                    <p>
                        Your Product ID is <span style={{color: '#000', fontWeight: '900'}}>#S38932354BD </span> 
                        and will be delivered within 24 hours 
                    </p>
                </div>
          </center>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </React.Fragment>
  )
}

export default Confirmation
