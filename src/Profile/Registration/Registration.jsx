import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Mlogo } from '../../assets'

import './registration.css'


const Registration = () => {
    
   const [dob, setDOB] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');

   const [password, setPassword] = useState('');
   const [showPassword, setShowPassword] = useState(false);

   const [confirmPassword, setConfirmPassword] = useState('');
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleDOBChange = (e) => {
    setDOB(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
                <div className="form-group mb-4">
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='First name'/>
                </div>
                <div className="form-group mb-4">
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Last name'/>
                </div>
                <div className="form-group mb-4">
                  <input type="date" id="dob" name="dob" value={dob} onChange={handleDOBChange} className="form-control" placeholder='Date of birth'/>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ marginRight: '10px', width: '100%' }}>
                    <PhoneInput
                        id="phone"
                        displayInitialCountryFlag={false}
                        international
                        defaultCountry="NG"
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                    />
                    </div>
                    <div>
                    {/* Display country code */}
                    {phoneNumber && <span>{phoneNumber.split(' ')[0]}</span>}
                    </div>
                </div>

                <div className="form-group mt-5 mb-3">
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address'/>
                </div>
                <div style={{ position: 'relative' }} className='mb-4'>
                    <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' placeholder='Password'/>
                    <span
                    onClick={togglePasswordVisibility}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer'
                    }}
                    >
                    {showPassword ? <FontAwesomeIcon icon={faEye} style={{color: '#1410B4'}}/> : <FontAwesomeIcon icon={faEyeSlash} style={{color: '#1410B4'}}/>}
                    </span>
                </div>

                <div style={{ position: 'relative' }} className='mb-4'>
                    <input type={showConfirmPassword ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='form-control' placeholder='Confirm Password'/>
                    <span
                    onClick={toggleConfirmPasswordVisibility}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer'
                    }}
                    >
                    {showConfirmPassword ? <FontAwesomeIcon icon={faEye} style={{color: '#1410B4'}}/> : <FontAwesomeIcon icon={faEyeSlash} style={{color: '#1410B4'}}/>}
                    </span>
                </div>
                <div className="form-group mb-4">
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Last name'/>
                </div>

                <div className="checkout text-center mt-5">
                    <button className='reg-btn'>Get Started</button>

                    <div className='reg mt-2'>
                        <div>
                         <p style={{color: '#848481'}}>Have an account?</p>
                        </div>
                        <div className='ml-2'>
                         <button className='log-re'>Log In</button>
                        </div>
                    </div>
                    
                </div>
              </form>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3"></div>
      </div>
    </React.Fragment>
  )
}

export default Registration
