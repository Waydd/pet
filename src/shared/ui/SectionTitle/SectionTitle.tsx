import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
  icon: string;
  title: string;
}

export default function SectionTitle({ icon, title }: SectionTitleProps) {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.icon} src={icon} />
        <p className={styles.title}>{title}</p>
      </div>
    </>
  );
}
