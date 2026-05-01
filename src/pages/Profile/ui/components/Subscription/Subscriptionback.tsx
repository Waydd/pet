import styles from "./Subscription.module.scss";
import style from "../Button/Button.module.scss";
import { Button } from "../../../../../shared/ui/Button/Button/Button";
import SectionTitle from "../../../../../shared/ui/SectionTitle/SectionTitle";
import subscriptionIcon from "../../assets/icons/subscription.svg";

interface SubscritionProps {
  title: string;
  text: string;
  button: string;
  sstyle: string;
}

interface SubscriptionConfig {
  title: string;
  text: string;
  buttonText: string;
  buttonStyle: string;
  frameStyle: string;
}

const config: Record<string, SubscriptionConfig> = {
  none: {
title: "Нет активной подписки";
text: "Оформите подписку для доступа ко всем функциям";
buttonText: "Оформить";
buttonStyle: styles.wrappedWhite;
  }
}

function Cription({ title, text, button, sstyle }: SubscritionProps) {
  return (
    <>
      <div className={styles.container}>
        <SectionTitle icon={subscriptionIcon} title="Подписка" />
        <div className={{ sstyle }}>
          <div className={styles.text}>
            <p className={styles.title}>{title}</p>
            <p>{text}</p>
          </div>

          <Button className={style.subscriptionBlue}>{button}</Button>
        </div>
      </div>
    </>
  );
}

function NoSubscription() {
  return (
    <>
      <Cription
        title="Нет активной подписки"
        text="Оформите подписку для доступа ко всем функциям"
        button="Оформить"
        sstyle="styles.wrappedWhite"
      />
    </>
  );
}

// function NoSubscription() {
//   return (
//     <>
//       <div className={styles.container}>
//         <SectionTitle icon={subscriptionIcon} title="Подписка" />
//         <div className={styles.frame}>
//           <div className={styles.text}>
//             <p className={styles.title}>Нет активной подписки</p>
//             <p>Оформите подписку для доступа ко всем функциям</p>
//           </div>

//           <Button className={style.design}>Оформить</Button>
//         </div>
//       </div>
//     </>
//   );
// }

function ProSubscription() {
  return (
    <>
      <Cription title="Pro" text="Активна до 21.06.2025" button="Активна" />
    </>
  );
}

function FreeSubscription() {
  return (
    <>
      <Cription
        title="Бесплатный доступ"
        text="Ограниченный доступ"
        button="Улучшить"
      />
    </>
  );
}

const subscriptionViews = {
  none: <NoSubscription />,
  pro: <ProSubscription />,
  free: <FreeSubscription />,
};

export default function SubscriptionCard() {
  return (
    <>
      <div>
        <NoSubscription />
      </div>
    </>
  );

  // return <FreeSubscription />;
  // return <ProSubscription />;
}
