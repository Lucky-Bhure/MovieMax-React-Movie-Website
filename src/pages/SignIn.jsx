import React from 'react'
import { Form, NavLink } from 'react-router-dom'
import "./Contact.css"

export const getSignInData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch(err) {
    console.log(err);
  }
}

const SignIn = () => {
  return (
    <div className='contact-main-container'>
      <h1>Sign In</h1>
      <p>Please Enter Your Email and Password</p>
      <Form method="POST" action="/contact" className="form-main-container">
        <div className='form-container'>
          <label htmlFor="email">E-mail</label>
          <input type="email" name='email' id='email' required autoComplete='off' placeholder='Enter your E-mail' />
        </div>
        <div className='form-container'>
          <label htmlFor="password">Password</label>
          <input type="password" name='password' id='password' required autoComplete='off' placeholder='Enter your password'/>
        </div>

        <button className='submit-btn'>Sign In</button>
        <p>Don't have an account? <NavLink to="/signup" className="sign-in-up">Sign Up</NavLink></p>
      </Form>
    </div>
  )
}

export default SignIn