// Will contain the contact hyperlinks i.e. Github, linkedin, email, phone
import React, { useState } from "react"
import CV from "../../assets/documents/JackJohnsonCV.pdf"
import contactData from "../../data/contact.json"

let currentYear = new Date().getFullYear()

function Footer() {
	const [contact, setContact] = useState(contactData)

	return (
		<div className="container">
			<footer className="my-4">
				<ul className="nav justify-content-between border-bottom pb-2 mb-3">
					<li>
						<a
							href={contact.email}
							className="nav-link px-2 text-body-secondary"
						>
							Email
						</a>
					</li>
					<li>
						<a
							href={contact.linkedin}
							target="_blank"
							className="nav-link px-2 text-body-secondary"
						>
							LinkedIn
						</a>
					</li>
					<li className="nav-item">
						<a
							href={contact.github}
							target="_blank"
							className="nav-link px-2 text-body-secondary"
						>
							GitHub
						</a>
					</li>
					<li className="nav-item">
						<a href={CV} target="_blank" className="nav-link px-2 text-body-secondary">
							CV
						</a>
					</li>
				</ul>
				<p className="text-center text-body-secondary">
					&copy; {currentYear} Jack Johnson || Web Developer
				</p>
			</footer>
		</div>
	)
}

export default Footer
