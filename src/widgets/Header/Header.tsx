import { Link } from "react-router-dom";
import React from "react";
import { Button } from "../../shared/ui/Button";
import styles from "./Header.module.scss";
import classes from "../../shared/ui/Button/Button.module.scss";

export const Header: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">CODE GYM</Link>
        </div>

        <nav className={styles.navigation}>
          <Link to="/profile">Задачи</Link>
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
