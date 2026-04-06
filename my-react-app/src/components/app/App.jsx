import { Header } from "../header/header";
import { QuestionList } from "../questionList/questionList";
import { Filter } from "../filter/filter";
import "./App.scss";
import clsx from "clsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <QuestionList />
        <Filter />
      </main>
    </>
  );
}

export default App;
