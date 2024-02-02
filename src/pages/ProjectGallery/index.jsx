import React, { useState } from "react"
import ProjectCard from "../../components/ProjectCard"
import projectData from "../../data/projects.json"
import "./styles.css"

// This component imports data from the projects JSON and passes it as props to the ProjectCard component so each card can be dynamically rendered

function ProjectGallery() {
	const [projects, setProjects] = useState(projectData) // Assigns the array of data from the JSON file to a variable called projects

	return (
		<>
			<h3 id="project-title">Project Gallery</h3>
			<div className="d-flex flex-wrap justify-content-evenly">
				{projects.map((project) => (
					<ProjectCard
						key={project.key}
						name={project.name}
						image={project.image}
						description={project.description}
						url={project.url}
						github={project.github}
					/>
				))}
			</div>
		</>
	)
}

export default ProjectGallery
