import styles from "./Grade.module.scss";
import SectionTitle from "../../../../../shared/ui/SectionTitle/SectionTitle";
import gradeIcon from "../../../../../shared/assets/icons/grade.svg";
import specializationIcon from "../../../../../shared/assets/icons/specialization.svg";
import { useRef, useEffect, useState } from "react";

interface Option {
  id: number;
  value: string;
}

const grade: Option[] = [
  { id: 1, value: "Junior" },
  { id: 2, value: "Middle" },
  { id: 3, value: "Senior" },
];

const specialization: Option[] = [
  { id: 1, value: "Backend-разработчик" },
  { id: 2, value: "Frontend-разработчик" },
  { id: 3, value: "Fullstack-разработчик" },
];

export default function Grade() {
  const [isOpenGrade, setIsOpenGrade] = useState<boolean>(false);
  const [selectedGrade, setSelectedGrade] = useState<Option | null>(null);

  const [isOpenSpecialization, setIsOpenSpecialization] =
    useState<boolean>(false);
  const [selectedSpecialization, setSelectedSpecialization] =
    useState<Option | null>(null);

  const gradeRef = useRef<HTMLDivElement>(null);
  const specializationRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (gradeRef.current &&
        !gradeRef.current.contains(e.target as Node)) {
          setIsOpenGrade(false);
        }
        };
          
        document.addEventListener("mousedown", handleClickOutside);
          return () => document.removeEventListener("mousedown", handleClickOutside);
       }, []);
       
useEffect(() => {
  const handleClickOutside = (e: MouseEvent) => {
    if (specializationRef.current && !specializationRef.current.contains(e.target as Node)) {
      setIsOpenSpecialization(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);  

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapped}>
          <SectionTitle icon={gradeIcon} title="Грейд" />
          <div className={styles.wrappedSection} ref={gradeRef}>
            <div
              onClick={() => setIsOpenGrade(!isOpenGrade)}
              className={styles.trigger}
            >
              {selectedGrade ? selectedGrade.value : "Выберите грейд"}
              <svg
                className={`${styles.arrow} ${isOpenGrade ? styles.arrowOpen : ""}`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {isOpenGrade && (
              <div className={styles.dropdownContainer}>
                {grade.map((gradeItem) => (
                  <div
                    key={gradeItem.value}
                    className={styles.dropdown}
                    onClick={() => {
                      setSelectedGrade(gradeItem);
                      setIsOpenGrade(false);
                    }}
                  >
                    {gradeItem.value}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={styles.wrapped}>
          <SectionTitle icon={specializationIcon} title="Специализация" />
          <div className={styles.wrappedSection} ref={specializationRef}>
            <div
              onClick={() => setIsOpenSpecialization(!isOpenSpecialization)}
              className={styles.trigger}
            >
              {selectedSpecialization
                ? selectedSpecialization.value
                : "Выберите специализацию"}

              <svg
                className={`${styles.arrow} ${isOpenSpecialization ? styles.arrowOpen : ""}`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {isOpenSpecialization && (
              <div className={styles.dropdownContainer}>
                {specialization.map((spec) => (
                  <div
                    key={spec.value}
                    className={styles.dropdown}
                    onClick={() => {
                      setSelectedSpecialization(spec);
                      setIsOpenSpecialization(false);
                    }}
                  >
                    {spec.value}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
