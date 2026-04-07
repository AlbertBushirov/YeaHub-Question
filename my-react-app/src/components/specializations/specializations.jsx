import "./specializations.scss";

export function Specializations({
  specializations,
  selectedSpec,
  setSelectedSpec,
}) {
  return (
    <div>
      <span>Специализация</span>
      <div>
        {specializations?.data.map((s) => {
          const isActive = s.slug === selectedSpec;
          return (
            <button
              className={isActive ? "btn-active" : "btn-default"}
              onClick={() => setSelectedSpec(s.slug)}
            >
              {s.title}
            </button>
          );
        })}
      </div>
      <a>Посмотреть все</a>
    </div>
  );
}
