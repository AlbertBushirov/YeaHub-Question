import "./rating.scss";

export function Rating({ selectedRating, setSelectedRating }) {
  const rating = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      <span>Рейтинг</span>
      <ul>
        {rating.map((r) => (
          <li>
            <button
              key={r}
              className={selectedRating === r ? "btn-active" : "btn-default"}
              onClick={() => setSelectedRating(r)}
            >
              {r}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
