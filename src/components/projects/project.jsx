import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, isPublic } = props;

	const inner = (
		<div className="project-container">
			<div className="project-header">
				<div className="project-logo">
					<img src={logo} alt="logo" />
				</div>
				<span
					className={`project-badge ${isPublic ? "badge-public" : "badge-private"}`}
				>
					<FontAwesomeIcon
						icon={isPublic ? faLockOpen : faLock}
						style={{ fontSize: "9px", marginRight: "5px" }}
					/>
					{isPublic ? "Public" : "Private"}
				</span>
			</div>

			<div className="project-title">{title}</div>
			<div className="project-description">{description}</div>

			{isPublic && link ? (
				<div className="project-link">
					<div className="project-link-icon">
						<FontAwesomeIcon icon={faLink} />
					</div>
					<div className="project-link-text">{linkText}</div>
				</div>
			) : (
				<div className="project-link project-link--private">
					<div className="project-link-icon">
						<FontAwesomeIcon icon={faLock} />
					</div>
					<div className="project-link-text">Private repository</div>
				</div>
			)}
		</div>
	);

	return (
		<React.Fragment>
			<div className="project">
				{isPublic && link ? (
					<a href={link} target="_blank" rel="noreferrer">
						{inner}
					</a>
				) : (
					<div>{inner}</div>
				)}
			</div>
		</React.Fragment>
	);
};

export default Project;
