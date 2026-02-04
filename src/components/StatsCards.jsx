import styles from "../modules/statsCards.module.css"


const StatsCards = ({ stats }) => {
  return (
    <div className={styles.cardsContainer}>
      {stats.map((stats, index) => (
        <div key={index} className={styles.card}>
          <h1 className={styles.statsNumber}>{stats.value}</h1>
          <p className={styles.statsText}>{stats.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
