import React, { useState } from 'react'
import { Mlogo } from '../../assets'

import './registration.css'


const Registration = () => {
    
   const [dob, setDOB] = useState('');

  const handleDOBChange = (e) => {
    setDOB(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-3"></div>
          <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="reg-img text-center">
                  <img src={ Mlogo } alt="" className='my-5'/>
                  <h5 className='mx-3'>Personal Details</h5>
                  <p>This information is requied to verify and protect<br></br> your OBD account</p>
              </div>

              <form className='order-form custom-w-100 my-5'>
                <div className="form-group mb-5">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='First name'/>
                </div>
                <div className="form-group mb-5">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Last name'/>
                </div>
                <div className="form-group mb-5">
                <input type="date" id="dob" name="dob" value={dob} onChange={handleDOBChange} className="form-control" placeholder='Date of birth'/>
                </div>
                <div className="form-group mb-5">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='000'/>
                </div>

                <div className="checkout text-center mt-5">
                    <button className='check-btn'>Check out ₦400,000</button>
                </div>
              </form>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3"></div>
      </div>
    </React.Fragment>
  )
}

export default Registration
