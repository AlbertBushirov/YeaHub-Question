import "./levels.scss";

export function Levels({ selectedLevels, setSelectedLevels }) {
  const levels = [1, 4, 7, 9];
  const levelLabels = {
    1: "1-3",
    4: "4-6",
    7: "7-8",
    9: "9-10",
  };

  return (
    <div className="levels">
      <span>Уровень сложности</span>
      <ul>
        {levels.map((level) => (
          <li>
            <button
              key={level}
              className={
                selectedLevels === level ? "btn-active" : "btn-default"
              }
              onClick={() => setSelectedLevels(level)}
            >
              {levelLabels[level]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
