import React, { useState } from "react";
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'

export default function Login (){
 const [name,setName]=useState('');
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');
 const navigate=useNavigate();


 const handleChange=(event)=>{
    event.preventDefault();
   axios.post('http://localhost:3005/app/signin',{name,email,password})
   .then(result=>{console.log(result)
   if(result?.data?.message ==='user already exist'){
    alert('Email Already registered! please login ');
    
 }
 else{
    alert('Registered Successfully! please login');
    navigate('/login');
 }
}).catch(err=>console.log(err))
 }

    return(
<div className="container">
   <div>

    <h5 style={{textAlign:'center',padding:"10px"}}>Registration Form </h5>
   </div>
   <div style={{marginTop:"30px"}}>

    <input id="Name" type="text" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)}></input>
    <input id="email" type="email" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></input>
    <input id="password" type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
    <input className="button" type="button" style={{width:'50%',marginLeft:'50px'}}value='Register' onClick={handleChange} disabled={name==="" || email==='' || password ===''}></input>
    <p>Already have an account  <Link to='/login'>Login</Link></p>
   </div>
     
</div>
    )
}