import { useState } from "react";

export function useFilterState() {
  const [keywords, setKeywords] = useState("");
  const [selectedSpec, setSelectedSpec] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedLevels, setSelectedLevels] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  // Группируем значения для чтения
  const values = {
    keywords,
    selectedSpec,
    selectedSkill,
    selectedLevels,
    selectedRating,
    pageNumber,
  };

  // Группируем функции для изменения
  const actions = {
    setKeywords,
    setSelectedSpec,
    setSelectedSkill,
    setSelectedLevels,
    setSelectedRating,
    setPageNumber,
  };

  return [values, actions];
}
