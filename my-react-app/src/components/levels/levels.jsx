import { useState } from "react";
import "./levels.scss";

export function Levels() {
  const [levels, setlevels] = useState(null);

  return (
    <div className="levels">
      <span>Уровень сложности</span>
      <ul>
        <li>1-3</li>
        <li>4-6</li>
        <li>7-8</li>
        <li>9-10</li>
      </ul>
    </div>
  );
}
