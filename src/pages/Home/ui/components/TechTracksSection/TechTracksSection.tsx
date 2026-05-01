import React from "react";
import TechCard from "./TechCard";
import { TechCardsData } from "../../../../../shared/data/techTracks.data";
import styles from "./TechCard.module.scss";

const TechTracksSection: React.FC = () => {
  return (
    <div className={styles.containerGrid}>
      {TechCardsData.map((card) => (
        <TechCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default TechTracksSection;
