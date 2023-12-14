import React, { useState } from "react";
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'

export default function Login (){
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');
 const navigate=useNavigate();


 const handleSubmit=(event)=>{
event.preventDefault();
   axios.post('http://localhost:3005/app/login',{email,password})
   .then(result=>{console.log(result)
   if(result?.data?.message === 'allow to login'){
    console.log('Login succesfully');
    alert('Login succesfully');
    navigate('/home')
 }
 else{
    alert('incorrect password')
 }
}).catch(err=>console.log(err))
 }

    return(
<div className="container">
<div>
<h5 style={{textAlign:'center',padding:"10px"}}>Login Form </h5>
</div>
   <div style={{marginTop:"30px"}}>
    <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
    <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
    <input className="button" type="button" value='Login' onClick={handleSubmit} disabled={email==='' || password ===''}></input>
     <p>Don't have an account ? <Link to='/register'>Register</Link></p>
     </div>
</div>
    )
}