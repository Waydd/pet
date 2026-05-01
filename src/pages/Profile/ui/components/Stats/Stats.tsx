import SectionTitle from "../../../../../shared/ui/SectionTitle/SectionTitle";
import statsIcon from "../../../../../shared/assets/icons/stats.svg";
import styles from "./Stats.module.scss";

export default function Stats() {
  return (
    <>
      <div className={styles.container}>
        <SectionTitle icon={statsIcon} title="Статистика" />
        <div className={styles.wrapped}>
          <div className={styles.field}>
            <p className={styles.title}>Решенных задач</p>
            <p className={styles.number}>15</p>
          </div>

          <div className={styles.field}>
            <p className={styles.title}>Собеседований</p>
            <p className={styles.number}>4</p>
          </div>

          <div className={styles.field}>
            <p className={styles.title}>Дней подряд</p>
            <p className={styles.number}>30</p>
          </div>
        </div>
      </div>
    </>
  );
}
