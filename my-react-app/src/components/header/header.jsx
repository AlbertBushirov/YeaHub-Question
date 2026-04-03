import "./header.scss";

export function Header() {
  return (
    <header className="header">
      <a href="#" className="header__logo">
        {" "}
      </a>
      <nav className="header__nav">
        <ul>
          <li>База вопросов</li>
          <li> Тренажёр</li>
          <li>Материалы</li>
          <li>Навыки()</li>
        </ul>
      </nav>
      <div className="header__buttons">
        <button>Вход</button>
        <button>Регистрация</button>
      </div>
    </header>
  );
}
