import React from 'react'
import { Form } from 'react-router-dom'
import "./Contact.css"


export const getFormData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch(err) {
    console.log(err);
  }
}

const Contact = () => {
  return (
    <div className='contact-main-container'>
      <h1>Contact Us</h1>
      <p>Get in touch With us. We are always here to help you.</p>
      
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
          <label htmlFor="message">Message</label>
          <textarea type="text" name='message' id='message' required autoComplete='off' placeholder='Enter your Message' cols="30" rows="6" />
        </div>

        <button className='submit-btn'>Submit</button>
      </Form>
    </div>
  )
}

export default Contact
