import React from "react"
import { Link, NavLink } from "react-router-dom"
import CV from "../../assets/documents/JackJohnsonCV.pdf"
// import DrRobotnik from "../../assets/images/DrRobotnik.png"

function NavigationBar() {
	return (
		<nav className="navbar navbar-expand-md bg-dark navbar-dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<img
						src="./images/DrRobotnik.png"
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
				<div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<NavLink to="/" className="nav-link">
							Home
						</NavLink>
						<NavLink to="/projectgallery" className="nav-link">
							Project Gallery
						</NavLink>
						<NavLink to="/contact" className="nav-link">
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
