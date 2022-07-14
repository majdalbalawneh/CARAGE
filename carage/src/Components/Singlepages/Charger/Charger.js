import React, { useState } from 'react';
import axios from 'axios';
import '../Car_wash/Form2.css';
import DateTimePicker from 'react-datetime-picker';

function Charger() {

    const [name, setName] = useState('test-name');
    const [phone, setPhone] = useState('test-name');
    const [car_type, setCarType] = useState('test-email');
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


    const clickHandel = ()=>{
        axios.post('http://localhost/carage/carage_backend/charger.php?name='+name+'&phone_number='+phone+'&car_type='+car_type+'&location='+location+'&charger_type='+order+'&auto_order_weekly='+auto_order+'&time_picker='+time_picker)
        .then((data) => {
            
        })
        .catch((error) => {
            console.error(error);
        });
    }


}

export default Charger;