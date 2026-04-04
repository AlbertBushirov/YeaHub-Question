import { useState } from "react";
import "./status.scss";

export function Status() {
  const [status, setStatus] = useState(null);

  return (
    <div className="status">
      <span>Статус</span>
      <ul>
        <li>Изученные</li>
        <li>Не изученные</li>
        <li>Все</li>
      </ul>
    </div>
  );
}
