import { Header } from "../header/header";
import { QuestionList } from "../questionList/questionList";
import { Filter } from "../filter/filter";
import "./App.scss";
import styles from "../../styles/index.module.scss";
import clsx from "clsx";

function App() {
  return (
    <div className={clsx(styles.main)}>
      <Header />
      <main>
        <QuestionList />
        <Filter />
      </main>
    </div>
  );
}

export default App;
