import skillsIcon from "../../../../../shared/assets/icons/skills.svg";
import SectionTitle from "../../../../../shared/ui/SectionTitle/SectionTitle";
import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <>
      <div className={styles.container}>
        <SectionTitle icon={skillsIcon} title="Навыки" />
        <div className={styles.wrapped}>
          <div className={styles.TextWrap}>
            <div className={styles.textContainer}>
              <p>Python</p>
              <p>80%</p>
            </div>
            <div className={styles.line}>
              <div className={styles.scalePython} />
            </div>
          </div>

          <div className={styles.TextWrap}>
            <div className={styles.textContainer}>
              <p>TypeScript</p>
              <p>30%</p>
            </div>
            <div className={styles.line}>
              <div className={styles.scaleTS} />
            </div>
          </div>

          <div className={styles.TextWrap}>
            <div className={styles.textContainer}>
              <p>Next.js</p>
              <p>65%</p>
            </div>
            <div className={styles.line}>
              <div className={styles.scaleNextjs} />
            </div>
          </div>

          <div className={styles.TextWrap}>
            <div className={styles.textContainer}>
              <p>JavaScript</p>
              <p>15%</p>
            </div>
            <div className={styles.line}>
              <div className={styles.scaleJS} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
