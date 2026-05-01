import React from "react";
import styles from "./FeatureCard.module.scss";
import { CardData } from "../../../../../shared/data/features.data";

interface CardProps {
  card: CardData;
}

const FeatureCard: React.FC<CardProps> = ({ card }) => {
  return (
    <div className={styles.container}>
      <img src={card.icon} alt={card.icon} className={styles.logo} />
      <h1 className={styles.title}>{card.title}</h1>
      <p className={styles.text}>{card.text}</p>
    </div>
  );
};

export default FeatureCard;
