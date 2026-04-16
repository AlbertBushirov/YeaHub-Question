import "./App.scss";
import { Header } from "../header/header";
import { Page } from "../page/page";
import { Filter } from "../filter/filter";
import { Footer } from "../footer/footer";
import { useFilterState } from "../hooks/useFilterState";
import { useFetchData } from "../hooks/useFetchData";

function App() {
  const [filterValues, filterActions] = useFilterState();
  const { questions, specializations, skills } = useFetchData(filterValues);

  return (
    <>
      <Header />
      <main>
        <Page
          questions={questions}
          pageNumber={filterValues.pageNumber}
          setPageNumber={filterActions.setPageNumber}
        />
        <Filter
          values={filterValues}
          actions={filterActions}
          data={{ specializations, skills }}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
