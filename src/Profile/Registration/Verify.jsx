import React from 'react'
import { Mlogo } from '../../assets'


const Verify = () => {
  return (
    <React.Fragment>
      <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-3"></div>
          <div className="col-sm-12 col-md-12 col-lg-6">
               <div className="reg-img text-center">
                  <img src={ Mlogo } alt="" className='my-5'/>
                  <h5 className='mx-3'>Verify Your Phone Number</h5>
                  <p>An OTP verification code has been sent to your<br></br> phone number +234098940290</p>
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3"></div>
      </div>
    </React.Fragment>
  )
}

export default Verify
