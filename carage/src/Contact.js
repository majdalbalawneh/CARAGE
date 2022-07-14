import React, {useState}from 'react'
import Header from './Components/Header'
import SubHeader from './Components/SubHeader'
import axios from 'axios'

function Contact ()  {

  const [confirm, setConfirm] = useState('none');
  const [error, setErorr] = useState('none');


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState();


  const name_handle = (e)=>{setName(e.target.value)}
  const email_handle = (e)=>{setEmail(e.target.value)}

  const subject_handle = (e)=>{setSubject(e.target.value)}
  const message_handle = (e)=>{setMessage(e.target.value)}

const notification = ()=>{
  if(name == '' || email == '' || message == '')
  {
    setErorr('block')

  }else
  {
    axios.get("http://localhost/carage/carage_backend/contact.php?name="+name+"&email="+email+"&subject="+subject+"&message="+message).then(

 setConfirm('block') ,
 setErorr('none'),
 document.getElementById('name').value = "",
 document.getElementById('email').value = "",
 document.getElementById('subject').value = "",
 document.getElementById('message').value = ""

 );
  }









}

  return (
    
    <div>
    <Header title= 'Contact Us'/>
        <div className="contact">
  <div className="container">
    <SubHeader subTitle1='Get In Touch' subTitle2='Contact for any query'/>
    <div className="row">
      <div className="col-md-4">
        <div className="contact-info">
          <h2>Quick Contact Info</h2>
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="far fa-clock" />
            </div>
            <div className="contact-info-text">
              <h3>Opening Hour</h3>
              <p>Mon - Fri, 8:00 - 9:00</p>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fa fa-phone-alt" />
            </div>
            <div className="contact-info-text">
              <h3>Call Us</h3>
              <p>+962 778090532</p>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="far fa-envelope" />
            </div>
            <div className="contact-info-text">
              <h3>Email Us</h3>
              <p>carage_company@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-7">
        <div className="contact-form">
        <div class="alert alert-success" style= {{display: confirm}}  role="alert"> Message sent succefully, we will contact you back as soon as possible </div>
        <div class="alert alert-danger" style= {{display: error}}  role="alert"> You need to fill the fields </div>

          <div id="success" />
          <div name="sentMessage" id="contactForm" noValidate="novalidate">
            <div className="control-group">
              <input
                type="text"
                className="form-control"
                onChange={name_handle}
                id="name"
                placeholder="Your Name"
                required="required"
                data-validation-required-message="Please enter your name"
              />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <input
                type="email"
                className="form-control"
                onChange={email_handle}

                id="email"
                placeholder="Your Email"
                required="required"
                data-validation-required-message="Please enter your email"
              />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <input
                type="text"
                className="form-control"
                onChange={subject_handle}

                id="subject"
                placeholder="Subject"
                required="required"
                data-validation-required-message="Please enter a subject"
              />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <textarea
                className="form-control"
                id="message"
                placeholder="Message"
                onChange={message_handle}

                required="required"
                data-validation-required-message="Please enter your message"
                defaultValue={""}
              />
              <p className="help-block text-danger" />
            </div>
            <div>
              <button
                className="btn btn-custom"
                type="submit"
                id="sendMessageButton"
                onClick={notification}
              >
                Send Message
              </button>
            </div>
          </div>
     
   
        </div>
      </div>
      <div className="col-md-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27764.911935385284!2d35.01916159171958!3d29.556733703948556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sjo!4v1657047509224!5m2!1sen!2sjo"
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Contact