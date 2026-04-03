import { useState, useEffect } from "react";

export function QuestionList() {
  const [questions, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.yeatwork.ru/questions/public-questions?page=1&limit=10&title=Node.js",
        );
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <main>
      <h1>Вопросы React, JavaScript</h1>
      <ul className="question_Container">
        {questions?.data.map((q) => {
          return (
            <li>
              <div>
                <h2>{q.title}</h2>
              </div>
              <div>
                <div>
                  <span>{`Рейтинг: ${q.rate}`}</span>
                  <span>{`Сложность: ${q.complexity}`}</span>
                </div>
                <img></img>
                <p>{q.shortAnswer}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
