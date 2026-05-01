import styles from "./Level.module.scss";
import SectionTitle from "../../../../../shared/ui/SectionTitle/SectionTitle";
import levelIcon from "../../../../../shared/assets/icons/level.svg";

export default function Level() {
  return (
    <>
      <div className={styles.container}>
        <SectionTitle icon={levelIcon} title="lvl - уровень" />
        <div className={styles.frame}>
          <div className={styles.containerText}>
            <p className={styles.level}>Текущий уровень: 1</p>
            <p>Решайте задачи и повышайте свой уровень!</p>
          </div>
          <div className={styles.line}>
            <div className={styles.scale}></div>
          </div>
          <p className={styles.stats}>5/10 задач до следующего уровня</p>
        </div>
      </div>
    </>
  );
}
