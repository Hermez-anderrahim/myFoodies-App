import React from 'react'
import { Link } from 'react-router-dom';
import "./login.css";

export const Login = () => {
  return (
    <div className='Signup-container'>
        <div className='signup-card'>
            <div className='column1'>
                <h2>Login</h2>
                <form >
                
                <input type="email" name='email' className='email input' placeholder='email'/>
                <input type="password"  name='password' className='password input' placeholder='password'/>
                <h3>Don't have an account  <Link className='Link' to="/signup">sign up</Link></h3>
                <button className='submit'><h2 >Log in </h2></button>
                </form>
            </div>
             <div className='column2'>
                
                    <h3 className='quote'>Looking where to eat? join my foodies </h3>
               
            </div>
        </div>
    </div>
  )
}
