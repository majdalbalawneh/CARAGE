import React, { Component } from "react";
import axios from 'axios';
const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)

const formValid = ({ isError, ...rest }) => {
    let isValid = false;

    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            isValid = false
        } else {
            isValid = true
        }
    });

    return isValid;
};

export default class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
            email: '',
            password: '',
            isError: {
               
                email: '',
                password: ''
            },
        }
    }


    onSubmit = e => {
        e.preventDefault();

        // if (formValid(this.state)) {
        //     console.log(this.state)
        // } else {
        //     console.log("Form is invalid!");
        // }
        let email=this.state.email
        let password=this.state.password

        // axios.post('http://localhost/CARAGE/PHP.PHP/read.php?email='+email+'&password='+password);

        axios.get('http://localhost/CARAGE/PHP.PHP/read.php?email='+email+'&password='+password).then(res => {
                        console.log(res.data);
                        // if(res.data){
                            let id=res.data
                            sessionStorage.setItem("user_id", id);
                        // }else{
                        //     sessionStorage.clear();
                        // }
                        // console.log(id);
                        // sessionStorage.setItem("user_id", id);
                      })
        // if(sessionStorage.getItem("user_id") == null){

        // }else{
            window.location.href = "/";
        // }
        



    };


    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
         
            case "email":
                isError.email = regExp.test(value)
                    ? ""
                    : "Email address is invalid";
                break;
            case "password":
                isError.password =
                    value.length < 6 ? "Atleast 6 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({
            isError,
            [name]: value
        })
    };

    render() {
        const { isError } = this.state;

        return (
            <form id='regForm' onSubmit={this.onSubmit} noValidate>
                            <h1>Login</h1>


                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="email"
                        onChange={this.formValChange}
                    />
                    {isError.email.length > 0 && (
                        <span className="invalid-feedback">{isError.email}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="password"
                        onChange={this.formValChange}
                    />
                    {isError.password.length > 0 && (
                        <span className="invalid-feedback">{isError.password}</span>
                    )}
                </div>

                <button type="submit" className="btn" id="regBtn">Login</button>
                <p id='regP'>Not a member yet? <a href="/SignUp">Sign Up</a></p>
            </form>
        );
    }
}