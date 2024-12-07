import React from 'react'
import { Form, NavLink } from 'react-router-dom';
import "./Contact.css"

export const getSignUpData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch(err) {
    console.log(err);
  }
}

const SignUp = () => {
  return (
    <div className='contact-main-container'>
      <h1>Sign Up</h1>
      <p>Please Enter Details for Creating Your Account</p>
      <Form method="POST" action="/contact" className="form-main-container">
      <div className='form-container'>
          <label htmlFor="username">UserName</label>
          <input type="text" name='username' id='username' required autoComplete='off' placeholder='Enter your Username' />
        </div>
        <div className='form-container'>
          <label htmlFor="email">E-mail</label>
          <input type="email" name='email' id='email' required autoComplete='off' placeholder='Enter your E-mail' />
        </div>
        <div className='form-container'>
          <label htmlFor="password">Password</label>
          <input type="password" name='password' id='password' required autoComplete='off' placeholder='Enter your password'/>
        </div>

        <button className='submit-btn'>Submit</button>
        <p>Already have an account? <NavLink to="/signin" className="sign-in-up">Sign In</NavLink></p>
      </Form>
    </div>
  )
}

export default SignUp