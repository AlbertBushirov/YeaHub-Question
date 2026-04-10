import "./status.scss";

export function Status() {
  return (
    <div className="status">
      <span>Статус</span>
      <ul>
        <li>
          <button className="btn-default">Изученные</button>
        </li>
        <li>
          <button className="btn-default">Не изученные</button>
        </li>
        <li>
          <button className="btn-default">Все</button>
        </li>
      </ul>
    </div>
  );
}
