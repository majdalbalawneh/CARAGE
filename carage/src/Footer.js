import React, {useState} from 'react'
import axios from 'axios'
import emailjs from 'emailjs-com'

function Footer() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');

  const name_handle = (e)=>{setName(e.target.value)}
  const email_handle = (e)=>{setEmail(e.target.value)}

  const submit = (e) => 
  {
    e.preventDefault();

    emailjs.sendForm('service_padpavu', 'template_z5hfatv', e.target, '_ChPQ3YSwY1mr6KIH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    console.log("working");
    axios.get('http://localhost/carage/PHP.PHP/new_settler.php?name='+name+'&email='+email).then(

      document.getElementById('name').value = "",
      document.getElementById('email').value = "",

    )

  }
  return (
    <>
      <>
  {/* Footer Start */}
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="footer-contact">
            <h2>Get In Touch</h2>
            <p>
              <i className="fa fa-map-marker-alt" />
              Fifth Area, Aqaba, Jordan
            </p>
            <p>
              <i className="fa fa-phone-alt" />
              +962 778090532
            </p>
            <p>
              <i className="fa fa-envelope" />
              carage_company@gmail.com
            </p>
            <div className="footer-social">
              <a target='blank' className="btn" href="https://twitter.com/garage_magazine">
                <i className="fab fa-twitter" />
              </a>
              <a target='blank' className="btn" href="https://web.facebook.com/The-Carage-2243830585835473/">
                <i className="fab fa-facebook-f" />
              </a>
              <a target='blank' className="btn" href="https://www.youtube.com/channel/UCSiuZtyovOjChU6a-Mb9Dig">
                <i className="fab fa-youtube" />
              </a>
              <a target='blank' className="btn" href="https://www.instagram.com/garage/">
                <i className="fab fa-instagram" />
              </a>
              <a target='blank' className="btn" href="https://www.linkedin.com/company/getcarage/">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="footer-link">
            <h2>Popular Links</h2>
            <a href="/About">About Us</a>
            <a href="/Contact">Contact Us</a>
            <a href="/Services">Our Services</a>
            <a href="/SignUp">Sign Up</a>
            <a href="/Login">Login</a>
          </div>
        </div>
        {/* <div className="col-lg-3 col-md-6">
          <div className="footer-link">
            <h2>Useful Links</h2>
            <a href="">Terms of use</a>
            <a href="">Privacy policy</a>
            <a href="">Cookies</a>
            <a href="">Help</a>
            <a href="">FQAs</a>
          </div>
        </div> */}
        <div className="col-lg-4 col-md-6">
          <div className="footer-newsletter">
            <h2>Newsletter</h2>
            <form onSubmit={submit}>
              <input className="form-control" id='name' name='name' onChange={name_handle} placeholder="Full Name" />
              <input className="form-control" id='email' name='email' onChange={email_handle} placeholder="Email" />
              <button type='submit' className="btn btn-custom" >Submit</button>
              </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container copyright">
      <p>
        © <a href="/">CARAGE </a>,2022 All Right Reserved.
      </p>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to top button */}
  <a href="#" className="back-to-top">
    <i className="fa fa-chevron-up" />
  </a>
  {/* JavaScript Libraries */}
  {/* Contact Javascript File */}
  {/* Template Javascript */}
</>

    </>
  )
}

export default Footer
