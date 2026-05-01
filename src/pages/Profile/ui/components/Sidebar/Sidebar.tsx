import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Подсказки</h1>

        <p className={styles.item}>Рекомендации по профилю</p>
        <ul className={styles.list}>
          <li>
            Заполните все поля профиля, чтобы получить максимальную пользу от
            платформы
          </li>
          <li>
            Укажите реальные навыки для получения персонализированных
            рекомендаций
          </li>
        </ul>

        <p className={styles.item}>Повышение уровня</p>

        <ul className={styles.list}>
          <li>
            Чтобы повысить уровень, вам необходимо решать задачи. За каждую
            решенную задачу вы получаете баллы:
          </li>
        </ul>

        <div className={styles.textWrapped}>
          <div className={styles.wrappedString}>
            <p>Простые задачи:</p>
            <p className={styles.points}>1 балл</p>
          </div>
          <div className={styles.wrappedString}>
            <p>Средние задачи:</p>
            <p className={styles.points}>3 балла</p>
          </div>
          <div className={styles.wrappedString}>
            <p>Сложные задачи:</p>
            <p className={styles.points}>5 баллов</p>
          </div>
        </div>
      </div>
    </>
  );
}
