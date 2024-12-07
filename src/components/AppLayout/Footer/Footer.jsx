import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className='footer-div'>
        <div className='division1'>
          <h1 className="logo">MovieMax</h1>
          <p>Welcome to MovieMax EcomStore. your ultimate destination for cutting-edge gadgets!</p>
          <div>
            <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="1" />
          </div>
        </div>
        <div className='division2'>
          <h3>SHOPPING</h3>
          <p>Computer Store</p>
          <p>Laptop Store</p>
          <p>Accessories</p>
          <p>Sales & Discount</p>
        </div>
        <div className='division2'>
          <h3>Experience</h3>
          <p>Cotact Us</p>
          <p>Payment Method</p>
          <p>Delivery</p>
          <p>Return & Exchange</p>
        </div>
        <div className='division2'>
          <h3>NEWSLETTER</h3>
          <p>Be tho first to know about new</p>
          <p>arrivals. sales & promos!</p>
          <input type="text" name="" id="" placeholder='Enter Email'/>
        </div>
      </div>
      <div className='copyright-div'>
        <p>Design and  Code by Lucky Bhure</p>
      </div>
    </footer>
  )
}

export default Footer
