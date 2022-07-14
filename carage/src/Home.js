import React from 'react'
import $ from "jquery";
import Testimonials from './Testimonials';
import Fact from './Components/Fact';
import HeroSection from './Components/HeroSection';
import ServicesGrid from './Components/ServicesGrid';
import SubHeader from './Components/SubHeader';
import Blog from './Components/Blog';




function Home() {
  return (
    
      <>

  {/* Video */}
  <HeroSection/>
  {/* End Video */}

  {/* Service Start */}
  <div className="service">
    <div className="container">
      <SubHeader subTitle1='What We Do?' subTitle2='Premium Services'/>
      <ServicesGrid/>
    </div>
  </div>
  {/* Service End */}
  {/* Facts Start */}
 <Fact/>
  {/* Facts End */}
  {/* Price Start */}
  <div className="price">
    <div className="container">
      <SubHeader subTitle1='Packages' subTitle2='Choose Your Package'/>
      <div className="row">
        <div className="col-md-4">
          <div className="price-item">
            <div className="price-header">
              <h3>Basic Cleaning</h3>
              <h2>
                <span>JD</span>
                <strong>9</strong>
                <span>.99</span>
              </h2>
            </div>
            <div className="price-body">
              <ul>
                <li>
                  <i className="far fa-check-circle" />
                  Seats Washing
                </li>
                <li>
                  <i className="far fa-check-circle" />
                  Vacuum Cleaning
                </li>
                <li>
                  <i className="far fa-check-circle" />
                  Exterior Cleaning
                </li>
                <li>
                  <i className="far fa-times-circle" />
                  Interior Wet Cleaning
                </li>
                <li>
                  <i className="far fa-times-circle" />
                  Window Wiping
                </li>
              </ul>
            </div>
            <div className="price-footer">
              <a className="btn btn-custom" href="">
                Book Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="price-item featured-item">
            <div className="price-header">
              <h3>Premium Cleaning</h3>
              <h2>
                <span>JD</span>
                <strong>14</strong>
                <span>.99</span>
              </h2>
            </div>
            <div className="price-body">
              <ul>
                <li>
                  <i className="far fa-check-circle" />
                  Seats Washing
                </li>
                <li>
                  <i className="far fa-check-circle" />
                  Vacuum Cleaning
                </li>
                <li>
                  <i className="far fa-check-circle" />
                  Exterior Cleaning
                </li>
                <li>
                  <i className="far fa-check-circle" />
                  Interior Wet Cleaning
                </li>
                <li>
                  <i className="far fa-times-circle" />
                  Window Wiping
                </li>
              </ul>
            </div>
            <div className="price-footer">
              <a className="btn btn-custom" href="">
                Book Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="price-item">
            <div className="price-header">
              <h3>Complex Cleaning</h3>
              <h2>
                <span>JD</span>
                <strong>19</strong>
                <span>.99</span>
              </h2>
            </div>
            <div className="price-body">
              <ul>
                <li>
                  <i className="far fa-check-circle" />
                  Seats Washing
                </li>
                <li>
                  <i className="far fa-check-circle" />
                  Vacuum Cleaning
                </li>
                <li>
                  <i className="far fa-check-circle" />
                  Exterior Cleaning
                </li>
                <li>
                  <i className="far fa-check-circle" />
                  Interior Wet Cleaning
                </li>
                <li>
                  <i className="far fa-check-circle" />
                  Window Wiping
                </li>
              </ul>
            </div>
            <div className="price-footer">
              <a className="btn btn-custom" href="">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Price End */}
  
  
  {/* Testimonial Start */}
  <div class="testimonial">
            <div class="container">
  <SubHeader subTitle1='Testimonial' subTitle2='What our clients say'/>
  <div className='testimonials_flex'>
    <Testimonials />
  </div>
  </div>
  </div>
  {/* Testimonial End */}
  {/* Blog Start */}
  <Blog/>
  {/* Blog End */}
</>

    
  )
}

export default Home
