import React, { useState } from "react"
import ProjectCard from "../../components/ProjectCard"
import projectData from "../../data/projects.json"
import "./styles.css"

function ProjectGallery() {
	const [projects, setProjects] = useState(projectData)

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
