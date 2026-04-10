import "./App.scss";
import BASE_URL from "../api/url";
import { useState, useEffect } from "react";
import { Header } from "../header/header";
import { QuestionList } from "../questionList/questionList";
import { Filter } from "../filter/filter";
import { useDeBounce } from "../hooks/useDebounce";
import { Footer } from "../footer/footer";

function App() {
  const [questions, setQuestions] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [keywords, setKeywords] = useState("");
  const debouncedKeywords = useDeBounce(keywords, 1500);
  //Стейт спецы
  const [specializations, setSpecializations] = useState(null);
  const [selectedSpec, setSelectedSpec] = useState("");
  //Стейт скилов
  const [skills, setSkills] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState("");
  //Стейт сложности
  const [selectedLevels, setSelectedLevels] = useState("");
  //Стейт рейтинга
  const [selectedRating, setSelectedRating] = useState("");

  useEffect(() => {
    setPageNumber(1);
  }, [debouncedKeywords]);

  //Специализация
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.yeatwork.ru/specializations");
        const json = await response.json();
        setSpecializations(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //Навыки
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.yeatwork.ru/skills");
        const json = await response.json();
        setSkills(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //Вопросы
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `${BASE_URL}questions/public-questions?page=${pageNumber}&limit=10`;

        if (debouncedKeywords.trim() !== "") {
          const searchParam = encodeURIComponent(debouncedKeywords);
          url += `&keywords=${searchParam}`;
        }

        if (selectedSpec) {
          url += `&specializationSlug=${selectedSpec}`;
        }

        if (selectedSkill) {
          url += `&skillFilterMode[]=${selectedSkill}`;
        }

        if (selectedLevels) {
          url += `&complexity[]=${selectedLevels}`;
        }

        if (selectedRating) {
          url += `&rate[]=${selectedRating}`;
        }

        const response = await fetch(url);
        const json = await response.json();
        setQuestions(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [
    pageNumber,
    debouncedKeywords,
    selectedSpec,
    selectedSkill,
    selectedLevels,
    selectedRating,
  ]);

  return (
    <>
      <Header />
      <main>
        <QuestionList
          questions={questions}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
        <Filter
          keywords={keywords}
          setKeywords={setKeywords}
          specializations={specializations}
          setSelectedSpec={setSelectedSpec}
          selectedSpec={selectedSpec}
          skills={skills}
          selectedSkill={selectedSkill}
          setSelectedSkill={setSelectedSkill}
          selectedLevels={selectedLevels}
          setSelectedLevels={setSelectedLevels}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
