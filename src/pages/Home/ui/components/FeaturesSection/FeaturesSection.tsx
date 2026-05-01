import React from "react";
import FeaturesCard from "./FeatureCard";
import { features } from "../../../../../shared/data/features.data";
import styles from "./FeatureCard.module.scss";

const FeaturesSection: React.FC = () => {
  return (
    <div className={styles.containerGrid}>
      {features.map((card) => (
        <FeaturesCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default FeaturesSection;
