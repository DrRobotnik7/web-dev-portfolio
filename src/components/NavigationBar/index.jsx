import React from "react"
import { Link, NavLink } from "react-router-dom"
import CV from "../../assets/documents/JackJohnsonCV.pdf"

function NavigationBar() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="blog"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Blog
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact/learn"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Learn
        </NavLink>
      </li>
    </ul>
  );
}

// function NavigationBar() {
// 	return (
// 		<>
// 				<NavLink to="/">Home</NavLink>
// 				<NavLink to="/projectgallery">Project Gallery</NavLink>
// 				<NavLink to="/contact">Contact</NavLink>
// 				<Link href={CV} target="_blank">CV</Link>
// 		</>

		// <Navbar expand="sm" bg="dark" data-bs-theme="dark">
		// 	<Container fluid>
		// 		<Navbar.Brand href="/">
		// 			<img
		// 				alt="DrRobotnik"
		// 				src="./src/assets/images/DrRobotnik.png"
		// 				width="30"
		// 				height="30"
		// 				className="d-inline-block align-top rounded-circle"
		// 			/>{" "}
		// 			Jack Johnson
		// 		</Navbar.Brand>
		// 		<Nav className="me-auto">

		// 		</Nav>
		// 	</Container>
		// </Navbar>

export default NavigationBar
