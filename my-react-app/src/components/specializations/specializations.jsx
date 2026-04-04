import { useState, useEffect } from "react";

export function Specializations() {
  const [specializations, setSpecializations] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.yeatwork.ru/specializations");
        const json = await response.json();
        console.log(json);
        setSpecializations(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <span>Специализация</span>
      <ul>
        {specializations?.data.map((s) => {
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
