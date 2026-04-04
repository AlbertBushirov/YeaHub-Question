import { useState, useEffect } from "react";

export function QuestionList() {
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.yeatwork.ru/questions/public-questions",
        );
        const json = await response.json();
        setQuestions(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Вопросы React, JavaScript</h1>
      <ul className="question_Container">
        {questions?.data.map((q) => {
          return (
            <li>
              <details>
                <summary>{q.title}</summary>
                <div>
                  <span>{`Рейтинг: ${q.rate}`}</span>
                  <span>{`Сложность: ${q.complexity}`}</span>
                </div>
                <div>
                  <image></image>
                  <p>{q.shortAnswer}</p>
                </div>
              </details>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
