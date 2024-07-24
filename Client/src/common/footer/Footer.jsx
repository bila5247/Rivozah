import React from "react"
import "./style.css"
import logo from "../../components/assets/images/dark-line-logo.png"



const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
          <img src={logo} alt='' />
            <p>Start your online shopping today with Rivozah E-commerce Store The world's number 1 online shopping store that offers the fastest delivery ever in the history of E-commerce.</p>
            <div className='icon d_flex'>
              <div className='img d_flex pay'>
               <img src="./images/payment.png" alt="Payment"/>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>Categories</h2>
            <ul>
              <li>Mother & Baby</li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Fashion</li>
              <li>Health & Beauty</li>
              <li>Furniture</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Useful Links</h2>
            <ul>
              <li>Home </li>
              <li>Collections </li>
              <li>About Us </li>
              <li>Offers </li>
              <li>Returns & Exchange Policy </li>
              <li>Terms And Conditions</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>
              1012, RTK Buiding, Dubai Investment Park, Dubai</li>
              <li>Email: info@rivozah.com</li>
              <li>Phone: +4917613877320</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
