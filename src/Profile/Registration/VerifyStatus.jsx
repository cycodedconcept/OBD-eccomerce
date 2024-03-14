import React, { useState } from 'react'
import { Success, Fail } from '../../assets'

import './registration.css'


const VerifyStatus = () => {
  const [showFirstDiv, setShowFirstDiv] = useState(false);

  React.useEffect(() => {
    setShowFirstDiv(true);
  }, []);

  return (
    <React.Fragment>
      <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-3"></div>
          <div className="col-sm-12 col-md-12 col-lg-6">
              {
                showFirstDiv ? (
                    <div className="status-section text-center">
                        <img src={ Success } alt="" className='w-25'/>

                        <h5 className='my-4'>Verification Successful</h5>
                        <p>Your phone number OTP verification<br></br> was successful</p>

                        <button className='reg-btn mt-5'>Proceed</button>
                    </div>
                ) : (
                    <div className="status-section text-center">
                        <img src={ Fail } alt="" className='w-25'/>

                        <h5 className='my-4'>Verification Failed</h5>
                        <p>Your phone number OTP verification<br></br> was not successful</p>

                        <button className='reg-btn mt-5'>Retry</button>
                    </div>
                )
              }
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3"></div>
      </div>
    </React.Fragment>
  )
}

export default VerifyStatus
