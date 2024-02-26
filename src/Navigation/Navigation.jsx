import React from 'react'
import './navbar.css'
import { Cart, Filter, Love, Not, Logo } from '../assets'


const Navigation = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg p-3">
        <a className="navbar-brand" href="/#"><img src={ Logo } alt="" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src={ Filter } alt="" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
            <li className="nav-item active">
                <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#">Ecommerce <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#">History <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#">Notification <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#">Account <span className="sr-only">(current)</span></a>
            </li>
            </ul>

            <img src={ Filter } alt="" className='mr-3'/>
            <img src={ Not } alt="" className='mr-3'/>
            <img src={ Love } alt="" className='mr-3'/>
            <img src={ Cart } alt="" />

        </div>
        </nav>
    </React.Fragment>
  )
}

export default Navigation
