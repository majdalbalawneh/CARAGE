import React from 'react'
import { Link } from 'react-router-dom'

function ServicesGrid() {
  return (
    <div>
        <section className="services">
    <div className="container">
      <div className="services-box">
        
        
        <div className="box">
          <Link to='/Repair'>
          <div className="ser-box">
            <div className="icon">
              <img src="../img/car-maintenance.png" alt='setting' width={'30%'}/>
            </div>
            <h4>Car Repair</h4>
            <p>We’re big proponents of proper maintenance and service.</p>
          </div>
          </Link>
        </div>
        
        
        <div className="box">
        <Link to='/Decor'>
          <div className="ser-box">
            <div className="icon">
              <img src="../img/15.png" alt="speed" width={'30%'}/>
            </div>
            <h4>Car Decoration</h4>
            <p>We’re big proponents of proper maintenance and service..</p>
          </div>
          </Link>
        </div>

        <div className="box">
        <Link to='/Rent'>
          <div className="ser-box">
            <div className="icon">
              <img src="../img/13.png" alt="protect" width={'30%'} />
            </div>
            <h4>Car Rentals</h4>
            <p>We’re big proponents of proper maintenance and service..</p>
          </div>
          </Link>
        </div>

        <div className="box">
        <Link to='/Backup'>
          <div className="ser-box">
            <div className="icon">
              <img src="../img/14.png" alt="backup" width={'30%'}/>
            </div>
            <h4>Monthly Backup</h4>
            <p>We’re big proponents of proper maintenance and service..</p>
          </div>
          </Link>
        </div>

        <div className="box">
        <Link to='/Charging'>
          <div className="ser-box">
            <div className="icon">
              <img src="../img/10.png" alt="img4" width='30%'/>
            </div>
            <h4>Car Charging</h4>
            <p>We’re big proponents of proper maintenance and service..</p>
          </div>
          </Link>
        </div>

        
        <div className="box">
          <Link to='/Wash'>
          <div className="ser-box">
            <div className="icon">
              <img src="../img/11.png" alt='database' width={'30%'}/>
            </div>
            <h4>car wash</h4>
            <p>We’re big proponents of proper maintenance and service..</p>
          </div> 
          </Link>
        </div>
       
        
      </div>
    </div>
  </section></div>
  )
}

export default ServicesGrid