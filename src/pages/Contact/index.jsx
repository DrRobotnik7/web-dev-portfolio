import React, { useState } from "react"
import contactData from "../../data/contact.json"
import CV from "../../assets/documents/JackJohnsonCV.pdf"
import "./styles.css"

function Contact() {
	const [contact, setContact] = useState(contactData)

	return (
  <>
    <h3>My Contact Details</h3>
      <div className="m-3">
        <p>Thank you for visiting my web development portfolio! Please keep checking back for future projects. Feel free to get in touch if you have any questions or just want to network!</p>
        <p>Email: <a href={contact.email}>jackj.1988@googlemail.com</a></p>
        <p>LinkedIn: <a href={contact.linkedin}>{contact.linkedin}</a></p>
        <p>GitHub: <a href={contact.github}>{contact.github}</a></p>
        <p>CV: <a href={CV} target="_blank">Jack Johnson Web Developer CV</a></p>
      </div>
    <h3>Contact Me</h3>
    <form className="m-3" action="https://getform.io/f/13fdd2c6-8887-4bfd-87c1-025d67d56172" method="POST">
      <div className="form-group mb-3" controlId="formBasicName">
        <label for="name">Your Name</label>
      <input className="form-control" type="text" name="name" placeholder="Anne Onymous" />
      </div>
      <div className="form-group mb-3" controlId="formBasicEmail">
        <label for="email">Email address</label>
        <input className="form-control" type="email" name="email" placeholder="nostalgia@blueyonder.co.uk" />
      </div>
      <div className="form-group mb-3" controlId="formBasicMessage">
        <label for="message">Message</label>
        <input className="form-control" name="message" as="textarea" rows={3} placeholder="Type in me!"/>
      </div>
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </form>
</>)
}

export default Contact
