import React from "react";
import { Data } from "../../../../../shared/data/techStack.data";
import styles from "./TechStack.module.scss";


const TechStack: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Технологический стек</p>
      <div className={styles.containerFlex}>
        {Data.map((props) => (
          <div className={styles.icon} key={props.id}>
            <img src={props.logo} alt={styles.logo} className={styles.logo} />
            <p>{props.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
