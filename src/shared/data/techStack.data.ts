import react from "../../shared/assets/TechStackLogo/react.svg"
import python from "../../shared/assets/TechStackLogo/python.svg";
import html from "../../shared/assets/TechStackLogo/html.svg";
import typescript from "../../shared/assets/TechStackLogo/typescript.svg";
import javascript from "../../shared/assets/TechStackLogo/javascript.svg";
import redis from "../../shared/assets/TechStackLogo/redis.svg";
import css from "../../shared/assets/TechStackLogo/css.svg";
import nextjs from "../../shared/assets/TechStackLogo/nextjs.svg";
import git from "../../shared/assets/TechStackLogo/git.svg";
import kafka from "../../shared/assets/TechStackLogo/kafka.svg";
import postgresql from "../../shared/assets/TechStackLogo/postgresql.svg";
import rabbitmq from "../../shared/assets/TechStackLogo/rabbitmq.svg";
import docker from "../../shared/assets/TechStackLogo/docker.svg";

export interface TechStackData {
  id: number;
  logo: string;
  text: string;
}

export const Data: TechStackData[] = [
  {
    id: 1,
    logo: react,
    text: "React",
  },

  {
    id: 2,
    logo: python,
    text: "Python",
  },
  {
    id: 3,
    logo: html,
    text: "HTML",
  },
  {
    id: 4,
    logo: typescript,
    text: "TypeScript",
  },
  {
    id: 5,
    logo: javascript,
    text: "JavaScript",
  },
  {
    id: 6,
    logo: redis,
    text: "Redis",
  },
  {
    id: 7,
    logo: css,
    text: "CSS",
  },
  {
    id: 8,
    logo: nextjs,
    text: "Next.js",
  },
  {
    id: 9,
    logo: git,
    text: "Git",
  },
  {
    id: 10,
    logo: kafka,
    text: "Kafka",
  },
  {
    id: 11,
    logo: postgresql,
    text: "PostgreSQL",
  },
  {
    id: 12,
    logo: rabbitmq,
    text: "RabbitMQ",
  },
  {
    id: 13,
    logo: docker,
    text: "Docker",
  },
];
