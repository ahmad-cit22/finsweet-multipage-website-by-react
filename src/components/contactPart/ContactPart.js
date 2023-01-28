import React from 'react'
import './contactPart.css'

const ContactPart = () => {
  return (
      <div className="contactPage">
          <div className="container contactPageBox commonPadding">
              <div className="contactBoxHeader text-center">
                  <h1 className="textBig">Contact Us</h1>
                  <p className="textSmall textMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore.</p>
              </div>
              <div className="contactFormBox">
                  <form className="display-flex" action="#" method="POST">
                      <div className="inpField">
                          <label for="">Name</label><input type="text" placeholder="Enter your name" />
                      </div>
                      <div className="inpField">
                          <label for="">Email</label><input type="email" placeholder="Enter your email" />
                      </div>
                      <div className="inpField">
                          <label for="">Subject</label><input type="text" placeholder="Provide context" />
                      </div>
                      <div className="inpField">
                          <label for="">Subject</label><input type="text" placeholder="Select Subject" />
                      </div>
                      <div className="textArea">
                          <label for="">Message</label>
                          <textarea name="" id="" cols="30" rows="10" placeholder="Write your  question here"></textarea>
                      </div>
                      <button className="btnLight">Send Message</button>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default ContactPart