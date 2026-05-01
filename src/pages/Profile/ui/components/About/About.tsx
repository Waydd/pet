import SectionTitle from "../../../../../shared/ui/SectionTitle/SectionTitle";
import aboutIcon from "../../../../../shared/assets/icons/about.svg";
import styles from "./About.module.scss";

export default function About() {
  return (
    <>
      <div className={styles.container}>
        <SectionTitle icon={aboutIcon} title="О себе" />
        <textarea className={styles.input} placeholder="Расскажите о себе..." />
      </div>
    </>
  );
}
