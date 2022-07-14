import React, { useState } from 'react';
import axios from 'axios';
import DateTimePicker from 'react-datetime-picker';
import './Components/Singlepages/Car_wash/Form2.css';
import Rate from './Components/Rate';

function Form() {
  const [confirm, setConfirm] = useState('none');
  const [error, setErorr] = useState('none');
  ////////////
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [car_type, setCarType] = useState('');
  const [location, setLocation] = useState(999);
  const [order, setOrder] = useState(111);
  const [auto_order, setAuto] = useState(1);
  const[time_picker,setTime]=useState(new Date());
// Error////////////////
  const [nameErr,setNameErr] = useState({});
  // const [PhoneErr,setPhoneErr] = useState({});
  // const [TimeErr,setTimeErr] = useState({});


  const name_handle = (e)=>{setName(e.target.value)}
  const phone_number = (e)=>{setPhone(e.target.value)}

  const car_typee = (e)=>{setCarType(e.target.value)}
  const locationn = (e)=>{setLocation(e.target.value)}
  const order_type = (e)=>{setOrder(e.target.value)}
  
  
  const auto_order_weekly = (e)=>{setAuto(e.target.value)}
  const clickHandel = (e)=>{
    e.preventDefault() 

    if(name == '' || phone == '' ||car_type == '' ||location == '' ||order == '' )
    {
        setErorr('block')


    }else
    {

    
    axios.post('http://localhost/carage/carage_backend/washing.php?name='+name+'&phone_number='+phone+'&car_type='+car_type+'&location='+location+'&auto_order_weekly='+auto_order)
    .then(
      setConfirm('block') ,
      setErorr('none'),
      document.getElementById('name').value = "",
      document.getElementById('address').value = "",
      document.getElementById('phone').value = "",
      document.getElementById('car_type').value = "",

      document.getElementById('radio_15').checked = false,
      document.getElementById('radio_16').checked = false

    )
    .catch((error) => {
        console.error(error);
    });
    }
}


  const showFormm = (e) => {
    e.preventDefault() 
    setShowForm(!showForm);
    const isValid = formValidation();

  }
const formValidation = () =>{
const nameErr ={};
// const PhoneErr ={};
// const TimeErr ={};
let isValid = true;

if(name.trim().length <5){
  nameErr.nameShort="Name is to short";
  isValid =false;
}
setNameErr(nameErr);



}

return(

  <div className="testbox">
    <form action="/" id='order-form'>
      {/* <div className="banner">
        <h1>Volunteer Signup</h1>
      </div>
      <br />
      <p>
        The HELP Group is seeking volunteers to serve our community. Fill in the
        information below to indicate how you would like to become involved.
      </p>
      <br /> */}
      <div className="colums">
        <div className="item">
          <label htmlFor="name">
            Name<span>*</span>
          </label>
          <input id="name" type="text" name="name" required=""  onChange={name_handle}/>
        </div>
        <div className="item">
          <label htmlFor="address">
             Address<span>*</span>
          </label>
          <input id="address" type="text" name="address" required=""  onChange={locationn}/>
        </div>
        <div className="item">
          <label htmlFor="phone">
            Phone<span>*</span>
          </label>
          <input id="phone" type="tel" name="phone" required=""  onChange={phone_number}  />
        </div>

        <div class="item">
        <label htmlFor="phone">
            Car Type<span>*</span>
          </label>
          <select onChange={car_typee} id="car_type"> 
            <option selected value="" disabled ></option> 
            <option value="C" >Coupe</option>
            <option value="M">Micro</option>
            <option value="v">Vans</option>
            <option value="mv">Minivan</option>
            <option value="p">Pickup</option>
            <option value="t">Truck</option>
            <option value="bt"> Big Truck</option>
          </select>
        </div>
      
      
        
      </div>

      


         
        
        <div className="question">
        
          <div className="question-answer">
            
           
            
           
            <label>Auto Order</label>
        <div className="question-answer">
          <div>
            <input
              type="radio"
              defaultValue="none"
              id="radio_15"
              name="contact"
              value='1'
              onChange={auto_order_weekly}
            />
            <label htmlFor="radio_15" className="radio" >
              <span>Yes</span>
            </label>
          </div>
          <div>
            <input
              type="radio"
              defaultValue="none"
              id="radio_16"
              name="contact"
              value='0'
              onChange={auto_order_weekly}
            />
            <label htmlFor="radio_16" className="radio" >
              <span>No</span>
            </label>
          </div>
          </div>
        </div>
    
            
      
        
      </div>
      <div className="btn-block">
        <button type="submit"  onClick={clickHandel}>
          Submit
        </button>
      </div>
      <br></br>
      <div class="alert alert-success" style= {{display: confirm}}  role="alert"> Service booked succefully, we will contact you back as soon as possible </div>
      <div class="alert alert-danger" style= {{display: error}}  role="alert"> You need to fill the fields </div>
      <div style= {{display: confirm}}><Rate/></div>
    </form>
  </div>
  
  
  
  
  
  
   );
 
}
export default Form;