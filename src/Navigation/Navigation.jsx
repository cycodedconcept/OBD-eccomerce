import React from 'react'
import './navbar.css'

const Navigation = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg p-3">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
            <li className="nav-item active">
                <a className="nav-link">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link">Ecommerce <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link">History <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link">Notification <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link">Account <span className="sr-only">(current)</span></a>
            </li>
            </ul>
        </div>
        </nav>
    </React.Fragment>
  )
}

export default Navigation
