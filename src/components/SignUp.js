import React from "react";
import '../css/SignUp.css';

const SignUp = () =>{
    return(
        <div className="signup_Form">
            <h3>Register</h3> 
            <input type="text" className="input_Field" placeholder="Name"/> 
            <input type="email" className="input_Field" placeholder="Email"/> 
            <input type="password" className="input_Field" placeholder="password"/>
            <button className="register_Btn">Register</button>
        </div>
    )
}

export default SignUp;