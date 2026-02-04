import SideBarNav from "../components/SideBarNav";
import StatsCards from "../components/StatsCards";
import { useAuth } from "../context/AuthContext";
import styles from "../modules/projects.module.css";
import projects from "../data/projects.json";
import clients from "../data/clients.json";
import crewMembers from "../data/crew.json";
import React, { useState } from "react";

const Projects = () => {
  const { user } = useAuth();

  const getClientById = (id) => clients.find((e) => e.id === id);
  const getCrewNames = (crewIds) =>
    crewIds
      .map((id) => {
        const member = crewMembers.find((e) => e.id === id);
        return member ? member.name : "Unknown";
      })
      .join(", ");

  const stats = [
    { label: "Active Projects", value: 12 },
    { label: "Completed This Year", value: 34 },
    { label: "Budget in Progress", value: "$18,500" },
  ];

  return (
    <div className={styles.container}>
      <SideBarNav />
      <div className={styles.headingContainer}>
        <div className={styles.projectHeader}>Projects</div>
        <StatsCards stats={stats} />
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Project</th>
                <th>Start Date</th>
                <th>Est. End</th>
                <th>Crew</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project) => {
                const [open, setOpen] = useState(false);
                return (
                  <React.Fragment key={project.id}>
                    <tr>
                      <td>{project.name}</td>
                      <td>{project.startDate}</td>
                      <td>{project.estimatedEndDate}</td>
                      <td>{project.crew.length}</td>
                      <td>
                        <span
                          className={`${styles.statusBadge} ${styles[project.status]}`}
                        >
                          {project.status.charAt(0).toUpperCase() +
                            project.status.slice(1)}
                        </span>
                      </td>
                      <td>
                        <button
                          className={styles.expandButton}
                          onClick={() => setOpen(!open)}
                        >
                          {open ? "-" : "+"}
                        </button>
                      </td>
                    </tr>
                    {open && (
                      <tr className={styles.dropdownRow}>
                        <td colSpan="6">
                          <div>
                            <p>
                              <strong>Client:</strong>{" "}
                              {getClientById(project.clientId)?.name ||
                                "Unknown"}{" "}
                              |{" "}
                              {getClientById(project.clientId)?.phone ||
                                "No phone"}
                            </p>
                            <p>
                              <strong>Crew:</strong>{" "}
                              {getCrewNames(project.crew)}
                            </p>
                            {project.comment && (
                              <p>
                                <strong>Comment:</strong> {project.comment}
                              </p>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Projects;
