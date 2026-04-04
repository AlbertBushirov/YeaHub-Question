import { useState } from "react";
import { Specializations } from "../specializations/specializations";
import { Skills } from "../skills/skills";
import { Levels } from "../levels/levels";
import { Rating } from "../rating/rating";
import { Status } from "../status/status";
import "./filter.scss";

export function Filter() {
  return (
    <div className="filter">
      <input
        id="search"
        name="search"
        type="search"
        placeholder="Введите вопрос"
      />
      <Specializations />
      <Skills />
      <Levels />
      <Rating />
      <Status />
    </div>
  );
}
