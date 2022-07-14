import React from 'react';
// import Car_wash from './Form';
import Form from './Form';
import Header from './Components/Header';
import { Link } from 'react-router-dom';



function Wash (){
    return(      
<>
{/* Page Header start */}
<Header title="Car Wash"/>
  {/* Page Header End */}
  
 {/* services start */}
 <div className="about">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-img">
            <img src="./img/about2.jpg" alt="Image" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="section-header text-left">
            <p>Service</p>
            <h2>car washing and detailing</h2>
          </div>
          <div className="about-content">
            <p>
              
            </p>Customers turn to CARAGE with all kinds of tuning orders, and thanks to having an experience of what we’ve been able to do in the past and what kind of a crew we have now we are positive that making any tuning idea of yours come true will be easy for us! 
            <ul>
              <li>
                <i className="far fa-check-circle" />
                Car wash
              </li>
              <li>
                <i className="far fa-check-circle" />
                Electrical cars charging
              </li>
              <li>
                <i className="far fa-check-circle" />
                Renting cars
              </li>
              <li>
                <i className="far fa-check-circle" />
                Decorating cars for occasions
              </li>
            </ul>
            
            <Form/>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* services End */}
  





</>






    );
}

export default Wash;
