import { useState } from "react";
import { Specializations } from "../specializations/specializations";
import { Skills } from "../skills/skills";
import { Levels } from "../levels/levels";
import { Rating } from "../rating/rating";
import { Status } from "../status/status";
import "./filter.scss";

export function Filter({
  keywords,
  setKeywords,
  specializations,
  selectedSpec,
  setSelectedSpec,
  skills,
  selectedSkill,
  setSelectedSkill,
  selectedLevels,
  setSelectedLevels,
  selectedRating,
  setSelectedRating,
}) {
  return (
    <aside className="filter">
      <input
        id="search"
        name="search"
        type="search"
        placeholder="Введите вопрос..."
        value={keywords}
        onChange={(e) => {
          setKeywords(e.target.value);
        }}
      />
      <Specializations
        specializations={specializations}
        setSelectedSpec={setSelectedSpec}
        selectedSpec={selectedSpec}
      />
      <Skills
        skills={skills}
        selectedSkill={selectedSkill}
        setSelectedSkill={setSelectedSkill}
      />
      <Levels
        selectedLevels={selectedLevels}
        setSelectedLevels={setSelectedLevels}
      />
      <Rating
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
      />
      <Status />
    </aside>
  );
}
