import React from "react";
import { Button } from "../../../../../shared/ui/Button/Button/Button";
import styles from "./Header.module.scss";
import classes from "../Button/Button.module.scss";

export const Header: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="gog.com">CODE GYM</a>
        </div>

        <nav className={styles.navigation}>
          <a href="google.com" target="_blank">
            Задачи
          </a>
          <a href="ya.ru" target="_blank">
            Вопросы с собеседований
          </a>
          <a href="bing.com" target="_blank">
            Daily coding
          </a>
        </nav>

        <div className={styles.button}>
          <Button className={classes.login}>Вход</Button>
          <Button className={classes.register}>Регистрация</Button>
        </div>
      </div>
    </>
  );
};
