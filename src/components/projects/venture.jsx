import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";
import "./styles/venture.css";

const Venture = ({ logo, title, description, startYear, endYear, clients }) => {
    const yearLabel = startYear
        ? `${startYear} – ${endYear ?? "Present"}`
        : null;

    return (
        <div className="project venture-card">
            <div className="project-container">
                <div className="project-header">
                    <div className="project-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    {yearLabel && (
                        <span className="venture-years">
                            <FontAwesomeIcon
                                icon={faCalendar}
                                style={{ fontSize: "10px", marginRight: "6px" }}
                            />
                            {yearLabel}
                        </span>
                    )}
                </div>

                <div className="project-title">{title}</div>
                <div className="project-description">{description}</div>

                {clients && clients.length > 0 && (
                    <div className="venture-clients">
                        {clients.map((client, i) =>
                            client.logo ? (
                                <img
                                    key={i}
                                    src={client.logo}
                                    alt={client.name}
                                    title={client.name}
                                    className="venture-client-logo"
                                    onError={(e) => {
                                        e.target.style.display = "none";
                                    }}
                                />
                            ) : (
                                <span key={i} className="venture-client-chip">
                                    {client.name}
                                </span>
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Venture;
