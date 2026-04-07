import { useState, useEffect } from "react";

export function Skills() {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.yeatwork.ru/skills");
        const json = await response.json();
        setSkills(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <span>Навыки</span>
      <ul>
        {skills?.data.map((s) => {
          return (
            <li>
              <span>{s.title}</span>
            </li>
          );
        })}
      </ul>
      <button>Посмотреть все</button>
    </div>
  );
}
