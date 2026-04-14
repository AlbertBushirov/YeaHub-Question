import { useState } from "react";

export function ListButtons({ name, title, buttons, selected, setSelected }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const allData = buttons?.data || [];
  const displayedData = isExpanded ? allData : allData.slice(0, 5);
  //const DisplayValue = s[title]

  return (
    <div>
      <span>{name}</span>
      <ul>
        {displayedData.map((s) => {
          const isActive = s[title] === selected;
          return (
            <li key={s.id}>
              <button
                className={isActive ? "btn-active" : "btn-default"}
                onClick={() => setSelected(s[title])}
              >
                {s.title}
              </button>
            </li>
          );
        })}
      </ul>

      {allData.length > 5 && (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? "Скрыть" : "Посмотреть все"}
        </a>
      )}
    </div>
  );
}
