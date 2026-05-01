import { useState } from "react";
import SectionTitle from "../../../../../shared/ui/SectionTitle/SectionTitle";
import linksIcon from "../../../../../shared/assets/icons/links.svg"
import styles from "./SiteList.module.scss";

interface SiteListProps {
  initialSites?: string[];
}

export default function SiteList({ initialSites = [] }: SiteListProps) {
  const [sites, setSites] = useState<string[]>(initialSites);

  const handleAdd = () => {
    setSites((prev) => [...prev, ""]);
  };

  const handleChange = (index: number, value: string) => {
    setSites((prev) => prev.map((site, i) => (i === index ? value : site)));
  };

  const handleRemove = (index: number) => {
    setSites((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className={styles.container}>
        <SectionTitle icon={linksIcon} title="Личные ссылки" />
        <div className={styles.siteList}>
          {sites.map((site, index) => (
            <div key={index} className={styles.siteItem}>
              <input
                type="text"
                value={site}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder="example.com"
                autoFocus={site === ""}
              />
              <button onClick={() => handleRemove(index)} aria-label="Удалить">
                ×
              </button>
            </div>
          ))}

          <button className={styles.addBtn} onClick={handleAdd}>
            + Добавить сайт
          </button>
        </div>
      </div>
    </>
  );
}
