import { Pagination } from "../pagination/pagination";
import { QuestionsList } from "../questionsList/questionsList";

export function Page({ questions, pageNumber, setPageNumber }) {
  return (
    <div className="question_list">
      <h1>Вопросы React, JavaScript</h1>
      <hr />
      <QuestionsList questions={questions} />
      <Pagination page={pageNumber} total={24} onChange={setPageNumber} />
    </div>
  );
}
