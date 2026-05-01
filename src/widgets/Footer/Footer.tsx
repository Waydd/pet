import { Button } from "../../shared/ui/Button/Button";
import styles from "./Footer.module.scss";
import classes from "../../shared/ui/Button/Button.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footerTop}>
        <div className={styles.footerInfo}>
          <p className={styles.title}>CODE GYM</p>
          <p>
            Платформа для подготовки разработчиков к техническим собеседованиям
            и улучшения алгоритрических навыков.
          </p>
        </div>
        <div>
          <a href="google.com" target="_blank" className={styles.titleMain}>
            Основное
          </a>
          <a href="google.com" target="_blank">
            Задачи
          </a>
          <a href="google.com" target="_blank">
            Вопросы с собедований
          </a>
          <a href="google.com" target="_blank">
            Daily coding
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div>
          <a>@2025 CODE GYM. Все права защищены</a>
        </div>
        <div className={styles.footerBottomLink}></div>
        <a href="google.com" target="_blank">
          Политика конфидициальности
        </a>
        <a href="google.com" target="_blank">
          Пользовательское соглашение
        </a>
      </div>
      <div className={styles.support}>
        <p>Есть вопросы или предложения? Мы всегда готовы помочь!</p>
        <Button className={classes.supportBtn}>Обратиться в поддержку</Button>
      </div>
    </div>
  );
}
