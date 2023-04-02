import React from 'react'
import PropTypes from 'prop-types';


export default function Navbars(props) {
  let barStyle={
    color:"#00bfa5"
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" style={barStyle} href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          
          <li className="nav-item">
            <a className="nav-link" href="/">{props.AboutText}</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          
        </ul>
        <form className="d-flex" role="search">
      
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
          <button type="button" class="btn btn-success mx-2">Dark</button>
          <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <button type="button" className="btn btn-info mx-2" >Contact</button> 
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><strong>Email : bakulsarkar009@gmail.com</strong><p>Mobile No : 7908829675</p>  </div>
        
    </div>
  </div>
        </form>
      </div>
    </div>
  </nav>
    </div>
  )
}
// specific props type
Navbars.propTypes = {
    title: PropTypes.string.isRequired,
    AboutText : PropTypes.string.isRequired
  };
//deafault props type
  //Navbars.defaultProps = {
    //title: 'WriteHelp',
    //AboutText : 'About'
  //};