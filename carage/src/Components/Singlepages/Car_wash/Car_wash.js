import React, { useState } from 'react';
import axios from 'axios';
import DateTimePicker from 'react-datetime-picker';
import './Form2.css';

function Try() {
      const [confirm, setConfirm] = useState('none');
  const [error, setErorr] = useState('none');
    // const [showForm, setShowForm] = useState(false);

    const [name, setName] = useState('test-name');
    const [phone, setPhone] = useState('test-name');
    const [car_type, setCarType] = useState('');
    const [location, setLocation] = useState(999);
    const [order, setOrder] = useState(111);
    const [auto_order, setAuto] = useState(1);
    const[time_picker,setTime]=useState(new Date());


    const name_handle = (e)=>{setName(e.target.value)}
    const phone_number = (e)=>{setPhone(e.target.value)}

    const car_typee = (e)=>{setCarType(e.target.value)}
    const locationn = (e)=>{setLocation(e.target.value)}
    const order_type = (e)=>{setOrder(e.target.value)}
    const auto_order_weekly = (e)=>{setAuto(e.target.value)}
    // const time_pickerr = (e)=>{setTime(e)}


    const clickHandel = ()=>{
        if(name == '' || phone == '' ||car_type == '' ||location == '' ||order == '' )
        {
            setErorr('block')


        }
        axios.post('http://localhost/carage/carage_backend/washing.php?name='+name+'&phone_number='+phone+'&car_type='+car_type+'&location='+location+'&wash_type='+order+'&auto_order_weekly='+auto_order+'&time_picker='+time_picker)
        .then(
            setConfirm('block') ,
            setErorr('none'),
            document.getElementById('name').value = "",
            document.getElementById('email').value = "",
            document.getElementById('subject').value = "",
            document.getElementById('message').value = ""

            
        )
        .catch((error) => {
            console.error(error);
        });
    }

    // const showFormm = (e) => {
    //     e.preventDefault() 
    //     setShowForm(!showForm);
    
    //   }
    
  
   
}
export default Try;