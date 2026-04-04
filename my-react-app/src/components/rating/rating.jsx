import { useState } from "react";
import "./rating.scss";

export function Rating() {
  const [levels, setlevels] = useState(null);

  return (
    <div className="rating">
      <span>Рейтинг</span>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
  );
}
