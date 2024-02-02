import React from "react"
import "./styles.css"

function About() {
	return (
		<>
			<div className="container-fluid mt-4">
				<div className="row g-1 justify-content-between align-items-start">
					<h2 className="col-md-3 p-2">About</h2>
					<div className="home-content col-md-8 p-2 border-grey">
						I am a junior front-end web developer with a focus on JavaScript ES6
						and React.
						<br />
						Whilst learning how to code I have been working as a Secondary
						Science Teacher and Head of Year.
						<br />I love technology, playing games, learning new skills, science
						and nature.
					</div>
				</div>
			</div>
			<div className="container-fluid mt-4">
				<div className="row g-1 justify-content-between align-items-start">
					<h2 className="col-md-3 p-2">Skills</h2>
					<div className="home-content col-md-8 p-2 border-grey">
						HTML5, CSS3, JavaScript ES6, Bootstrap 5, Node.js, React
					</div>
				</div>
			</div>
		</>
	)
}

export default About
