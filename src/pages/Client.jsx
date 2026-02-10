import SideBarNav from "../components/SideBarNav";
import { useAuth } from "../context/AuthContext";
import styles from "../modules/client.module.css";
import clients from "../data/clients.json";
import projects from "../data/projects.json";
import invoices from "../data/invoices.json";
import React, { useState } from "react";
import StatsCards from "../components/StatsCards";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import TopNavBar from "../components/TopNavBar";

const Client = () => {
  //using Context to pull in user
  //creating state variables to open dropdown menus
  const { user } = useAuth();
  const [open, setOpen] = useState(null);

  //getting projects for each user by filtering through data, and pulling all projects with matching client IDs
  const getClientProjects = (clientId) =>
    projects.filter((p) => p.clientId === clientId);

  const getProjectById = (id) => projects.find((project) => project.id === id);

  //getting invoices for each client by filtering data and pulling out all invoices matching client IDs
  const getClientInvoices = (clientId) =>
    invoices.filter((invoice) => invoice.clientId === clientId);

  //getting dates for the year, then filtering through clients and pulling all newClients created this year 
  const currentYear = new Date().getFullYear();

  const newClientsThisYear = clients.filter(
    (c) => new Date(c.dateCreated).getFullYear() === currentYear,
  ).length;

  //getting returning clients totals
  const returningClients = clients.filter(
  (c) => c.projects.length > 1
).length;


  const stats = [
    { label: "Returning Clients", value: returningClients },
    { label: "New Clients This Year", value: newClientsThisYear },
  ];

  return (
    <div className={styles.container}>
      <SideBarNav />
      <div className={styles.headingContainer}>
        <TopNavBar/>
        <div className={styles.projectHeader}>
          Hello, {user?.name || user?.email}
        </div>
        <StatsCards stats={stats} />
        <div className={styles.tablesContainer}>
          <div className={styles.tableHeaderContainer}>
            <h2>All Contacts</h2>
            <div className={styles.buttonContainer}>
              <button className={styles.addButton}>Add Client +</button>
            </div>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Business</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => {
                const isOpen = open === client.id;
                return (
                  <React.Fragment key={client.id}>
                    <tr>
                      <td>{client.name}</td>
                      <td>{client.phone}</td>
                      <td>{client.email}</td>
                      <td>{client.business || "N/A"}</td>
                      <td>
                        <button
                          className={styles.expandButton}
                          onClick={() => setOpen(isOpen ? null : client.id)}
                        >
                          {isOpen ? <BiMinus /> : <BiPlus />}
                        </button>
                      </td>
                    </tr>

                    {isOpen && (
                      <tr className={styles.dropdownRow}>
                        <td colSpan="6">
                          <div
                            className={`${styles.dropdownContent} ${styles.open}`}
                          >
                            <div>
                              <h2 className={styles.clientName}>
                                {client.name}
                              </h2>
                              <p>
                                <span className={styles.infoTitle}>Phone:</span>

                                <span className={styles.infoDetails}>
                                  {" "}
                                  {client.phone}
                                </span>
                              </p>
                              <p>
                                <span className={styles.infoTitle}>Email:</span>

                                <span className={styles.infoDetails}>
                                  {" "}
                                  {client.email}
                                </span>
                              </p>
                              <p>
                                <span className={styles.infoTitle}>
                                  Business:
                                </span>

                                <span className={styles.infoDetails}>
                                  {" "}
                                  {client.business || "N/A"}{" "}
                                </span>
                              </p>
                            </div>
                            <div className={styles.projectsContainer}>
                              <h2 className={styles.projectName}>
                                Projects
                              </h2>
                              {getClientProjects(client.id).length === 0 ? (
                                <p className={styles.muted}>No projects yet!</p>
                              ) : (
                                getClientProjects(client.id).map((project) => (
                                  <p key={project.id}>
                                    <span className={styles.infoTitle}>
                                      {project.name}:{" "}
                                    </span>

                                    <span className={styles.infoDetails}>
                                      {new Date(
                                        project.startDate,
                                      ).toLocaleString("default", {
                                        month: "short",
                                        year: "numeric",
                                      })}
                                    </span>
                                  </p>
                                ))
                              )}
                            </div>
                            <div className={styles.projectsContainer}>
                              <h2 className={styles.projectName}>Invoices</h2>
                              {getClientInvoices(client.id).length === 0 ? (
                                <p className={styles.muted}>
                                  Looking squared up! No invoices!
                                </p>
                              ) : (
                                getClientInvoices(client.id).map((invoice) => {
                                  const project = getProjectById(
                                    invoice.projectId,
                                  );
                                  return (
                                    <p key={invoice.id}>
                                      <span className={styles.infoTitle}>
                                        {project?.name || "Unknown Project"}
                                        :{" "}
                                      </span>
                                      <span className={styles.infoDetails}>
                                        {new Date(
                                          invoice.dueDate,
                                        ).toLocaleString("default", {
                                          month: "short",
                                          year: "numeric",
                                        })}
                                        ,{" "}
                                      </span>
                                      <span className={styles.infoDetails}>
                                        ${invoice.amount.toLocaleString()},{" "}
                                      </span>
                                      <span
                                        className={`${styles.invoiceStatus} ${styles[invoice.status]}`}
                                      >
                                        {invoice.status}
                                      </span>
                                    </p>
                                  );
                                })
                              )}
                            </div>
                            <div className={styles.dropdownActions}>
                              <button className={styles.editButton}>
                                Edit Client
                              </button>
                            </div>
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

export default Client;
