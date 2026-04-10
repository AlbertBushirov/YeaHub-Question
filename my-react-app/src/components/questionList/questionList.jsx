import "./questionList.scss";

import { Pagination } from "../pagination/pagination";

export function QuestionList({ questions, pageNumber, setPageNumber }) {
  return (
    <div className="question_list">
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
                  <img src={q.imageSrc} alt={q.title} />
                  <p>{q.shortAnswer}</p>
                </div>
              </details>
            </li>
          );
        })}
      </ul>
      <Pagination page={pageNumber} total={24} onChange={setPageNumber} />
      {/*Смог сделать только строгий тотал*/}
    </div>
  );
}
