import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Mlogo2 } from '../../assets'

import '../Registration/registration.css'


const Login = () => {
   const [password, setPassword] = useState('');
   const [showPassword, setShowPassword] = useState(false);

   const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <React.Fragment>
      <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-3"></div>
          <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="reg-img text-center">
                    <img src={ Mlogo2 } alt="" className='my-5'/>
                </div>
                <form className='order-form custom-w-100 my-5'>

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
                <div className="f-button-section" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button className='f-btn'>Forgot your password?</button>

                </div>

                <div className="checkout text-center mt-5">
                    <button className='reg-btn'>Sign In</button>

                    <div className='reg mt-5'>
                        <div>
                         <p style={{color: '#848481'}}>Don't have an account?</p>
                        </div>
                        <div className='ml-2'>
                         <button className='log-re'>Sign Up</button>
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

export default Login
