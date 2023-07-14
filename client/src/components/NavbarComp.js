import React from 'react'
import "../CSS/Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import MyImage from '../images/logo.jpg'
import { Link } from 'react-router-dom';

// import MyImage from "../images/weblogo.jpeg";
export default function NavbarComp() {
  return (
    <div>
    <header>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-white fixed-top">
        <div className="container"> */}
        {/* <a className="navbar-brand" href="/">
            <img src={MyImage} alt="Logo" width="30" height="30" className="d-inline-block align-top" style={{width:"50px"}}/>
          </a> */}
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft:"900px"}}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/viewjobs">My Jobs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>   
            </ul>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link but" href="/Login">Logout</a>
        </li>
      </ul>
    </div>
          </div>
        </div>
      </nav> */}
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <img src={MyImage} alt="Logo" width="35" height="30" class="d-inline-block align-text-top"/>          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"><Link to='/Addjobdetails'>Add Jobs</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#footer">Contact</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#"><Link to='/login'>Logout</Link></a>
                  </li>
                  
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
  )
}