import React from "react"
import { Link, NavLink } from "react-router-dom"
import CV from "../../assets/documents/JackJohnsonCV.pdf"
import DrRobotnik from "../../assets/images/DrRobotnik.png"
import "./styles.css"

function NavigationBar() {
	return (
		<nav className="navbar navbar-expand-lg bg-secondary">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<img
						src={DrRobotnik}
						alt="DrRobotnik"
						width="50"
						height="50"
						className="d-inline-block rounded-circle"
					/>
					{"  "}Jack Johnson
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<NavLink to="/" className="nav-link active">
							Home
						</NavLink>
						<NavLink to="Project Gallery" className="nav-link">
							Project Gallery
						</NavLink>
						<NavLink to="Contact" className="nav-link">
							Contact
						</NavLink>
						<Link to={CV} target="_blank" className="nav-link">
							CV
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default NavigationBar
