import styles from "../modules/crewCard.module.css";
import projects from "../data/projects.json";

const CrewCard = ({ member, isActive }) => {

  const hasActiveProject = projects.some(
    (p) =>
      p.crewIds?.includes(member.id) && p.status === "active"
  );
  console.log(member.name, member.phone, member.email);

  return (
    <div className={styles.card}>
      <img
        src={member.profilePic}
        alt={member.name}
        className={styles.avatar}
      />

      <div className={styles.info}>
        <div className={styles.name}>{member.name}</div>
        <div className={styles.detail}>{member.phone}</div>
        <div className={styles.detail}>{member.email}</div>
      </div>
      
      
      <span
        className={`${styles.statusDot} ${
          isActive ? styles.active : styles.inactive
        }`}
      /> 
    </div>
  );
};

export default CrewCard;
