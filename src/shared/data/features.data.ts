import ui1 from "../../shared/assets/ui-1.svg";
import ui2 from "../../shared/assets/ui-2.svg";
import ui3 from "../../shared/assets/ui-3.svg";

export interface CardData {
  id: number;
  icon: string;
  title: string;
  text: string;
}

export const features: CardData[] = [
  {
    id: 1,
    icon: ui1,
    title: "Библиотека задач",
    text: "Более 300 задач разного уровня сложности. Решайте, проверяйте и улучшайте свои навыки программирования.",
  },
  {
    id: 2,
    icon: ui2,
    title: "Отслеживание прогресса",
    text: "Анализируйте свои результаты, отслеживайте время решения и сравнивайте с другими разработчиками.",
  },
  {
    id: 3,
    icon: ui3,
    title: "Тренажер собеседований",
    text: "Готовьтесь к техническим интервью с реальными вопросами от ведущих IT-компаний.",
  },
];
