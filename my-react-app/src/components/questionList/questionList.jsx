import "./questionList.scss";

import { Pagination } from "../pagination/pagination";

export function QuestionList({ questions, pageNumber, setPageNumber }) {
  return (
    <div className="question_list">
      <h1>Вопросы React, JavaScript</h1>
      <hr />
      <ul className="question_list__container">
        {questions?.data.map((q) => {
          return (
            <li>
              <details className="details">
                <summary>{q.title}</summary>
                <div className="details__params">
                  <span>{`Рейтинг: ${q.rate}`}</span>
                  <span>{`Сложность: ${q.complexity}`}</span>
                </div>
                <div>
                  <img src={q.imageSrc} alt="" />
                  <p>{q.shortAnswer}</p>
                </div>
              </details>
            </li>
          );
        })}
      </ul>
      <Pagination page={pageNumber} total={24} onChange={setPageNumber} />
    </div>
  );
}
