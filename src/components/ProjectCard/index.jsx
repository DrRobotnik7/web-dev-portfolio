import React from "react"
import "./styles.css"

// This component takes props from the ProjectGallery, which in turn uses the projects JSON to pass values down to ProjectCard so they can be dynamically rendered

function ProjectCard(props) {
	return (
		<div className="card">
			<div className="img-container">
				<a href={props.url} target="_blank">
					<img alt={props.name} src={props.image} />
				</a>
			</div>
			<div className="content">
				<ul>
					<li className="project-title">
						<strong>{props.name}</strong>
					</li>
					<li>{props.description}</li>
					{props.url ? ( // This code block only renders URL if there is one in the JSON object
						<li>
							<strong>URL:</strong>
							<br />
							<a href={props.url} target="_blank">
								{props.url}
							</a>
						</li>
					) : null}
					<li>
						<strong>GitHub Repo:</strong>
						<br />
						<a href={props.github} target="_blank">
							{props.github}
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default ProjectCard
