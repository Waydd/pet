export interface TechCardData {
  id: number;
  title: string;
  text: string;
  tags: string[];
  stats: string[];
  color: string;
  colorHover: string;
}

export const TechCardsData: TechCardData[] = [
  {
    id: 1,
    title: "Frontend-разработка",
    text: "Создавайте современные интерфейсы и интерактивные веб приложения. Станьте экспертом в области пользовательских интерфейсов и улучшайте опыт взаимодействия пользователей.",
    tags: ["JavaScript", "TypeScript", "HTML/CSS", "Next.js", "React"],
    stats: ["150+ Задач", "100+ Вопросов"],
    color: "#2A6CD2",
    colorHover: "#0056B3",
  },
  {
    id: 2,
    title: "Backend-разработка",
    text: "Создавайте серверную логику и API для веб-сервисов и приложений. Изучайте построенние эффективных бекенд-систем и баз данных. Развивайте навыки масштабирования и оптимизации кода.",
    tags: ["Python", "Kafka", "PostgreSQL", "RabbitMQ", "Docker", "Redis"],
    stats: ["200+ Задач", "100+ Вопросов"],
    color: "#52A46C",
    colorHover: "#4C9A65",
  },
];
