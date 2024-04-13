import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { app } from './DB';
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 

export default function Register() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const db=getFirestore(app);
    
    function handleSubmit(e){
        e.preventDefault();
        console.log(email,password);
        const authTable=doc(db,"Authentication",email);
        setDoc(authTable,{password:password});
    }
  return (
    <>
    <h1>Register</h1>
    <form>
    <label htmlFor="email">Email</label>
    <input type="text" id="email" value={email} onChange={(e) => { 
               setEmail(e.target.value);
             }} required></input>
    <label htmlFor="password">Password</label>
    <input type="password" id="password" value={password} onChange={(e) => { 
               setPassword(e.target.value);
             }} required></input>
    <p>Have an account? <Link to="/login">Login</Link></p>
    <button type="submit" onClick={handleSubmit}>Login</button>
    </form>
    </>
  )
}