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
  const [open, setOpen] = useState(null);
  const [sortType, setSortType] = useState("status"); // default sort by status

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const sortedProjects = [...projects].sort((a, b) => {
    if (sortType === "status") {
      const statusOrder = { planned: 1, active: 2, delayed: 3, finished: 4 };
      return statusOrder[a.status] - statusOrder[b.status];
    } else if (sortType === "newest") {
      return new Date(b.startDate) - new Date(a.startDate);
    } else if (sortType === "oldest") {
      return new Date(a.startDate) - new Date(b.startDate);
    }
    return 0;
  });

  const getClientById = (id) => clients.find((e) => e.id === id);
  const getCrewNames = (crewIds) =>
    crewIds
      .map((id) => {
        const member = crewMembers.find((e) => e.id === id);
        return member ? member.name : "Unknown";
      })
      .join(", ");

  const currentYear = new Date().getFullYear();
  const activeProjectsCount = projects.filter((p) => p.status === "active" ).length;
  const completedThisYearCount = projects.filter(
    (p) =>
      p.status === "finished" &&
      p.endDate &&
      new Date(p.endDate).getFullYear() === currentYear,
  ).length;

  const estimatedEarnings = projects
    .filter((p) => p.status === "active" || p.status === "planned")
    .reduce((sum, p) => sum + (p.quotedPrice || 0), 0);

  const stats = [
    { label: "Active Projects", value: activeProjectsCount },
    { label: "Completed This Year", value: completedThisYearCount },
    { label: "Estimated Earnings", value: `$${estimatedEarnings.toLocaleString()}`},
  ];

  return (
    <div className={styles.container}>
      <SideBarNav />
      <div className={styles.headingContainer}>
        <div className={styles.projectHeader}>
          Hello, {user?.name || user?.email}
        </div>
        <StatsCards stats={stats} />

        <div className={styles.tableContainer}>
          <div className={styles.tableHeader}>
            <h2>All Projects</h2>
            <div className={styles.actions}>
              <button
                className={styles.addButton}
              >
                Add Project +
              </button>

              <select
                className={styles.sortSelect}
                value={sortType}
                onChange={handleSortChange}
              >
                <option value="status">Sort by Status</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>

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
              {sortedProjects.map((project) => {
                const isOpen = open === project.id;

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
                          onClick={() => setOpen(isOpen ? null : project.id)}
                        >
                          {isOpen ? "-" : "+"}
                        </button>
                      </td>
                    </tr>

                    {isOpen && (
                      <tr className={styles.dropdownRow}>
                        <td colSpan="6">
                          <div
                            className={`${styles.dropdownContent} ${styles.open}`}
                          >
                            <h2 className={styles.projectName}>
                              {project.name}
                            </h2>
                            <p>
                              <strong>Client:</strong>{" "}
                              {getClientById(project.clientId)?.name ||
                                "Unknown"}{" "}
                              |{" "}
                              {getClientById(project.clientId)?.phone ||
                                "No phone"}
                            </p>
                            <p>
                              <strong>Estimated Cost:</strong>{" "}
                              {project.quotedPrice
                                ? `$${project.quotedPrice.toLocaleString()}`
                                : "Not quoted"}
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
