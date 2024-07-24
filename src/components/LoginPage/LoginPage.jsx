import React, { useState } from 'react'
import './LoginPage.css'

export const LoginPage = () => {

    const [action, setAction] = useState("Sign In");

    return (
        <div className='login-form'>
            <div className="heading">
                <h2>{action}</h2>
            </div>
            {
                action === "Sign In" ?
                    <div className="input">
                        <i className="fa-solid fa-user"></i>
                        <input type="text" placeholder='Name' />
                    </div> : <div></div>
            }
            <div className="input">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" placeholder='Email Address' />
            </div>
            <div className="input">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder='Password' />
            </div>
            {
                action === "Sign In" ?
                    <p className='para'>Lost Password?<a href="#">Click here</a></p> :
                    <label className='para'><input type="checkbox" />Remember me</label>
            }
            <div className="btns">
                <button className={action === "Sign In" ? "btn" : "btn gray"} onClick={() => { (setAction("Sign In")) }}>Sign Up</button>
                <button className={action === "Sign In" ? "btn gray" : "btn"} onClick={() => { (setAction("Login")) }}>Login</button>
            </div>
        </div>
    )
}
