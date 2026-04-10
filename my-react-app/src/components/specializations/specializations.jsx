import { useState } from "react";

export function Specializations({
  specializations,
  selectedSpec,
  setSelectedSpec,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const allData = specializations?.data || [];
  const displayedData = isExpanded ? allData : allData.slice(0, 5);

  return (
    <div>
      <span>Специализация</span>
      <ul>
        {displayedData.map((s) => {
          const isActive = s.slug === selectedSpec;
          return (
            <li>
              <button
                key={s.id}
                className={isActive ? "btn-active" : "btn-default"}
                onClick={() => setSelectedSpec(s.slug)}
              >
                {s.title}
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
