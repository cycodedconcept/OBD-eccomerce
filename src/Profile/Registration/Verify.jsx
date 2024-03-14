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
                  <p>An OTP verification code has been sent to your<br></br> phone number <b>+234098940290</b></p>
              </div>
              <form className='order-form custom-w-100 my-5'>
                <div className="form-group mb-4">
                  <label>Verification Code</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <div className='reg mt-2'>
                    <div>
                        <p style={{color: '#848481'}}>didn't receive the code?</p>
                    </div>
                    <div className='ml-2'>
                        <button className='log-re'>Resend</button>
                    </div>

                </div>

                <button className='ve-btn'>Change Phone Number</button>


                <div className="checkout text-center mt-5">
                    <button className='reg-btn'>Verify</button>
                </div>
              </form>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3"></div>
      </div>
    </React.Fragment>
  )
}

export default Verify
