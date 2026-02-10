import SideBarNav from "../components/SideBarNav";
import TopNavBar from "../components/TopNavBar";
import { useAuth } from "../context/AuthContext";
import styles from "../modules/crew.module.css";
import crewMembers from "../data/crew.json";
import StatsCards from "../components/StatsCards";
import CrewCard from "../components/CrewCard";
import projects from "../data/projects.json";
import expenses from "../data/expenses.json";

const Crew = () => {
  const { user } = useAuth();

  const isCrewActive = (crewMember) => {
    return crewMember.projects.some((projectId) => {
      const project = projects.find((p) => p.id === projectId);
      return project?.status === "active";
    });
  };

  const getCrewEarnings = (crewMember) => {
    let total = 0;

    crewMember.projects.forEach((projectId) => {
      const projectLaborExpenses = expenses
        .filter((e) => e.projectId === projectId && e.category === "labor")
        .reduce((sum, e) => sum + e.amount, 0);

      const project = projects.find((p) => p.id === projectId);
      const crewCount = project?.crewIds?.length || 1;

      // divide labor evenly among crew members
      total += projectLaborExpenses / crewCount;
    });

    return total;
  };

  const getCrewMonthlyEarnings = (crewMember) => {
    const finishedProjects = crewMember.projects
      .map((id) => projects.find((p) => p.id === id))
      .filter((p) => p && p.status === "finished");
    const monthlyEarnings = {};

    finishedProjects.forEach((project) => {
      const laborExpenses = expenses
        .filter((e) => e.projectId === project.id && e.category === "labor")
        .reduce((sum, e) => sum + e.amount, 0);

      const start = new Date(project.startDate);
      const end = new Date(project.endDate || project.estimatedEndDate);

      const monthsCount =
        end.getFullYear() * 12 +
        end.getMonth() -
        (start.getFullYear() * 12 + start.getMonth()) +
        1;

      // split labor evenly across months
      const perMonth = laborExpenses / monthsCount;

      for (let i = 0; i < monthsCount; i++) {
        const month = new Date(start.getFullYear(), start.getMonth() + i, 1);
        const key = `${month.getFullYear()}-${String(
          month.getMonth() + 1,
        ).padStart(2, "0")}`;

        monthlyEarnings[key] = (monthlyEarnings[key] || 0) + perMonth;
      }
    });

    return monthlyEarnings;
  };

  const stats = [
    { label: "Crew Members", value: crewMembers.length },
    {
      label: "Total Payouts",
      value: `$${crewMembers
        .reduce((sum, m) => sum + getCrewEarnings(m), 0)
        .toLocaleString()}`,
    },
  ];

  return (
    <div className={styles.container}>
      <SideBarNav />
      <div className={styles.contentContainer}>
        <TopNavBar />
        <div className={styles.projectHeader}>
          Hello, {user?.name || user?.email}
        </div>
        <StatsCards stats={stats} />
        <div className={styles.crewContainer}>
          {/* LEFT COLUMN */}
          <div className={styles.box}>
            <div className={styles.boxTitle}>
              <h2 className={styles.crewContainerHeader}>Crew Members</h2>
              <p className={styles.status}>Active?</p>
            </div>

            {crewMembers.map((member) => (
              <CrewCard
                key={member.id}
                member={member}
                isActive={isCrewActive(member)}
              />
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className={styles.box}>
            <h2 className={styles.crewContainerHeader}>Finances</h2>

            <table className={styles.financeTable}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Monthly</th>
                  <th>YTD</th>
                </tr>
              </thead>
              <tbody>
                {crewMembers.map((member) => {
                  const monthly = getCrewMonthlyEarnings(member);
                  const total = Object.values(monthly).reduce(
                    (sum, val) => sum + val,
                    0,
                  );
                  const monthsCount = Object.keys(monthly).length;
                  const avgMonthly = monthsCount ? total / monthsCount : 0;

                  return (
                    <tr key={member.id}>
                      <td>{member.name}</td>
                      <td>{member.role}</td>
                      <td>${avgMonthly.toFixed(2)}</td>
                      <td>${total.toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
