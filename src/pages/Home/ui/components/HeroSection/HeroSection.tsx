import image from "../../../../../shared/assets/image.png";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.mainTitle}>
          Каждая строчка кода - шаг к твоей цели
        </h1>
        <p className={styles.text}>
          <span className={styles.title}> CODE GYM </span> - это современная
          платформа для подготовки разработчиков к техническим собеседованиям и
          улучшения алгоритмических навыков через практику.
        </p>
      </div>

      <img className={styles.image} src={image} alt="image" />
    </div>
  );
}
