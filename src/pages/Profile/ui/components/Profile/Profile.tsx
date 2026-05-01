import styles from "./Profile.module.scss";
import AvatarIcon from "../../../../../shared/assets/avatar.svg?react";
import UserIcon from "../../../../../shared/assets/user.svg?react";
import MailIcon from "../../../../../shared/assets/mail.svg?react";
import TgIcon from "../../../../../shared/assets/tg.svg?react";

const subscription = true;

export default function Profile() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.avatarWrapped}>
          {subscription && <div className={styles.badge}>PRO</div>}
          <AvatarIcon />
        </div>

        <div className={styles.data}>
          <div className={styles.userContainer}>
            <div className={styles.user}>
              <UserIcon />
              <p>Фамилия и имя</p>
            </div>
            <input
              className={styles.input}
              type="text"
              placeholder="Введите вашу фамилию и имя"
            />
          </div>

          <div className={styles.userContainer}>
            <div className={styles.user}>
              <MailIcon />
              <p>Почта</p>
            </div>
            <input
              className={styles.input}
              type="text"
              placeholder="example@mail.com"
            />
          </div>

          <div className={styles.tg}>
            <TgIcon />
            <p>Telegram:</p>
            <p className={styles.userName}> @username </p>
          </div>
        </div>
      </div>
    </>
  );
}
