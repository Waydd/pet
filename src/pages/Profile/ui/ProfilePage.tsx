import styles from "./ProfilePage.module.scss";
import style from "../../../shared/ui/Button/Button.module.scss"
import {Subscription, Level, Grade, Profile, Skills, About, Stats, SiteList, Sidebar} from "./components"

export default function ProfilePage() {
  return (
    <>
      <div className={styles.container}>
        <h1>Профиль</h1>
        <div className={styles.profileLayout}>
          <div className={styles.mainContent}>
            <Profile />
            <Subscription />
            <Level />
            <Grade />
            <Skills />
            <About />
            <Stats />
            <SiteList />

            <div className={styles.button}>
              <button className={style.saveButton}>Сохранить</button>
            </div>
          </div>

          <div className={styles.sidebar}>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
