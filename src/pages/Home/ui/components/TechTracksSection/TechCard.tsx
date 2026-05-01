import React from "react";
import { TechCardData } from "../../../../../shared/data/techTracks.data";
import styles from "./TechCard.module.scss";
import { Button } from "../Button/Button";

interface CardProps {
  card: TechCardData;
}

const TechCard: React.FC<CardProps> = ({ card }) => {
  return (
    <div
      className={styles.container}
      style={
        {
          "--card-color": card.color,
          "--card-colorHover": card.colorHover,
        } as React.CSSProperties
      }
    >
      <div className={styles.line} />
      <div className={styles.card}>
        <h1 className={styles.title}>{card.title}</h1>
        <p className={styles.text}>{card.text}</p>

        <div className={styles.tags}>
          {card.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.stats}>
          {card.stats.map((stats, index) => (
            <strong key={index} className={styles.stat}>
              {stats}
            </strong>
          ))}
        </div>

        <Button className={styles.button}>Перейти</Button>
      </div>
    </div>
  );
};

export default TechCard;
