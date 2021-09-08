import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password} from 'primereact/password';
import { Calendar } from 'primereact/calendar';
import './Signin.css';
export default function Signin() {
   
    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [birth, setBirth] = useState('');

    const userInfo = (id, password) =>{
      window.localStorage.setItem("ID", id);
      window.localStorage.setItem("PWD", password);
    };

   

    return (
        <>
        <div className = "signin">
            <div className = "inputWrapper">
                <div className = "inputField">
                    <h1>SIGN IN</h1> 
                    <div className="p-field">
                        <label htmlFor="username1" className="p-d-block">ID</label>
                        <InputText id="username1" aria-describedby="username1-help" className="p-d-block"
                        value= {userId} onChange ={(e) =>{setUserId(e.target.value)}}/>
                        <small id="username1-help" className="p-d-block">Enter your username.</small>
                    </div>
                    <div className="p-field">
                        <label htmlFor="password" className="p-d-block">Password</label>
                        <Password value={pwd} onChange={(e) => setPwd(e.target.value)} />
                        <small id="password-help" className="p-d-block">Enter your password.</small>
                    </div>
                    <div className="p-field">
                        <label htmlFor="username1" className="p-d-block">Email</label>
                        <InputText id="username1" aria-describedby="username1-help" className="p-d-block"
                        value = {userEmail} onChange={(e) =>{setUserEmail(e.target.value)}}/>
                        <small id="username1-help" className="p-d-block">Enter your email.</small>
                    </div>
                    <div className="p-field">
                        <label htmlFor="username1" className="p-d-block">Name</label>
                        <InputText id="username1" aria-describedby="username1-help" className="p-d-block"
                        value = {userName} onChange ={(e) => {
                            console.log(userName);
                            setUserName (e.target.value)}}/>
                        <small id="username1-help" className="p-d-block">Enter your name.</small>
                    </div>
                    <button className ="btn-sign" onClick={()=>{
                        userInfo(userName, pwd);
                        
                    }}>가입하기</button>
                </div>
            </div>
        </div>
        </>
    )
}