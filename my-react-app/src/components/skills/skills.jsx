import "./skills.scss";
import { useState } from "react";

export function Skills({ skills, selectedSkill, setSelectedSkill }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const allData = skills?.data || [];
  const displayedData = isExpanded ? allData : allData.slice(0, 5);

  return (
    <div>
      <span>Навыки</span>
      <ul>
        {displayedData.map((s) => {
          const isActive = s.title === selectedSkill;
          return (
            <li>
              <button
                key={s.id}
                className={isActive ? "btn-active" : "btn-default"}
                onClick={() => setSelectedSkill(s.title)}
              >
                <img class="skills__image" src={s.imageSrc} alt="" />
                <span> {s.title}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <a
        onClick={(e) => {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? "Скрыть" : "Посмотреть все"}
      </a>
    </div>
  );
}
