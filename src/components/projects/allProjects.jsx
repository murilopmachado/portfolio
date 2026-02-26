import React from "react";

import Project from "./project";
import Venture from "./venture";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const ProjectGroup = ({ projects, fullRow }) => (
	<div className={`all-projects-container${fullRow ? " all-projects-container--full-row" : ""}`}>
		{projects.map((project, index) => (
			<div className="all-projects-project" key={index}>
				<Project
					logo={project.logo}
					title={project.title}
					description={project.description}
					linkText={project.linkText}
					link={project.link}
					isPublic={project.isPublic}
				/>
			</div>
		))}
	</div>
);

const VentureGroup = ({ projects }) => (
	<div className="all-projects-container all-projects-container--full-row">
		{projects.map((project, index) => (
			<div className="all-projects-project" key={index}>
				<Venture
					logo={project.logo}
					title={project.title}
					description={project.description}
					startYear={project.startYear}
					endYear={project.endYear}
					clients={project.clients}
				/>
			</div>
		))}
	</div>
);

const AllProjects = ({ category, technicalFirst }) => {
	const filtered = category
		? INFO.projects.filter((p) => p.category === category)
		: INFO.projects;

	// Single-category mode: no section label, just the grid
	if (category) {
		return <ProjectGroup projects={filtered} />;
	}

	// All-categories mode: grouped with labels
	const ventures = filtered.filter((p) => p.category === "venture");
	const technical = filtered.filter((p) => p.category === "technical");

	if (technicalFirst) {
		return (
			<div>
				<div className="projects-section-label">Technical Projects</div>
				<ProjectGroup projects={technical} />

				<div className="projects-section-divider" />

				<div className="projects-section-label">Ventures &amp; Business</div>
				<VentureGroup projects={ventures} />
			</div>
		);
	}

	return (
		<div>
			<div className="projects-section-label">Ventures &amp; Business</div>
			<VentureGroup projects={ventures} />

			<div className="projects-section-divider" />

			<div className="projects-section-label">Technical Projects</div>
			<ProjectGroup projects={technical} />
		</div>
	);
};

export default AllProjects;
