import React from 'react'
import { Link } from 'react-router-dom';
import "./signup.css";

export const Signup = () => {
  return (
    <div className='Signup'>
        <div className='signup-card'>
            <div className='column1'>
                <h2>sign up</h2>
                <form >
                <input type="text" name='name' className='name input' placeholder='name'/>
                <input type="email" name='email' className='email input' placeholder='email'/>
                <input type="password"  name='password' className='password input' placeholder='password'/>
                <h3 className='question'>already have an account <Link className='Link' to="/login">log in</Link></h3>
                <Link to="/signup"></Link>
                <button className='submit'><h2 >sign in </h2></button>
                </form>
            </div>
             <div className='column2'>
                
                    <h3 className='quote'>Looking where to eat? join my foodies </h3>
               
            </div>
        </div>
    </div>
  )
}
