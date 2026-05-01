import { useState } from "react";
import styles from "./Subscription.module.scss";
import style from "../../../../../shared/ui/Button/Button.module.scss"
import { Button } from "../../../../../shared/ui/Button/Button/Button";
import SectionTitle from "../../../../../shared/ui/SectionTitle/SectionTitle";
import subscriptionIcon from "../../../../../shared/assets/icons/subscription.svg";

interface SubscriptionConfig {
  title: string;
  text: string;
  buttonText: string;
  buttonStyle: string;
  frameStyle: string;
}

const config: Record<string, SubscriptionConfig> = {
  none: {
    title: "Нет активной подписки",
    text: "Оформите подписку для доступа ко всем функциям",
    buttonText: "Оформить",
    buttonStyle: style.subscriptionBlue,
    frameStyle: styles.wrappedWhite,
  },
  free: {
    title: "Бесплатный доступ",
    text: "Ограниченный доступ",
    buttonText: "Улучшить",
    buttonStyle: style.subscriptionBlue,
    frameStyle: styles.wrappedWhite,
  },
  pro: {
    title: "Pro",
    text: "Активна до 21.06.2025",
    buttonText: "Активна",
    buttonStyle: style.subscriptionWhite,
    frameStyle: styles.wrappedBlue,
  },
};

function SubscriptionCard({ type }: { type: "none" | "pro" | "free" }) {
  const current = config[type];

  return (
    <div className={styles.container}>
      <SectionTitle icon={subscriptionIcon} title="Подписка" />
      <div className={current.frameStyle}>
        <div className={styles.text}>
          <p className={styles.title}>{current.title}</p>
          <p>{current.text}</p>
        </div>
        <Button className={current.buttonStyle}>{current.buttonText}</Button>
      </div>
    </div>
  );
}

export default function App() {
  const [activeType, setActiveType] = useState<"none" | "pro" | "free">("none");

  return (
    <div>
      <button onClick={() => setActiveType("none")}>none</button>
      <button onClick={() => setActiveType("pro")}>pro</button>
      <button onClick={() => setActiveType("free")}>free</button>

      <SubscriptionCard type={activeType} />
    </div>
  );
}
