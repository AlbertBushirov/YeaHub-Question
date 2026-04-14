import "./questionList.scss";

export function QuestionsList({ questions }) {
  return (
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
  );
}
