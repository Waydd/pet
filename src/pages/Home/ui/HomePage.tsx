import { HeroSection, FeaturesSection, TechTracksSection, TechStack } from "./components";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <HeroSection />

        <div>
          <h1 className={styles.title}>
            Все необходимое для успешной подготовки
          </h1>
          <p className={styles.text}>
            Наша платформа предоставляет полный набор инстументов для
            всесторонней подготовки к техническим собеседованиям и развития
            навыков программирования.
          </p>
        </div>
        <FeaturesSection />

        <div>
          <h1 className={styles.title}>Осваивайте ключевые технологии</h1>
          <p className={styles.text}>
            Мы собрали все востребованные технологии, чтобы вы могли построить
            свою карьеру в IT. Выберите интересующее направление и начните свой
            путь в программировании.
          </p>
        </div>
        <TechTracksSection />
        <TechStack />
      </div>
    </>
  );
}
