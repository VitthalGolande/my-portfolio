import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
         <div className="contact-container">
      <div>
        <h1 className="section-title">Contact <span className='sp'>info</span></h1>
      </div>
      <div className="contact-items" style={{display:"flex", marginTop:"50px",marginLeft:"5%"}}>
        <div className="contact-item" >
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
          <div className="contact-info">
            <h3>Phone</h3>
	          <h5>+91 7666571301</h5>
            <h5>+91 9112390836</h5>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
          <div className="contact-info">
            <h3>Email</h3>
            <h5>vitthalgolande9595@gmail.com</h5>
            <h5>vitthalgolande54@gmail.com</h5>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
          <div className="contact-info">
            <h3>Address</h3>
            <h5>A/p - Ukkadgoan, Shrigonda,Ahmednager 413702</h5>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact