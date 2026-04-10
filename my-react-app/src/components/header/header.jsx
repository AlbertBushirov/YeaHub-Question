import "./header.scss";
import logo from "../../images/logo.png";
import logo_Yeahub from "../../images/logo_Yeahub.png";

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="header__logo">
          <img src={logo} alt="logo_tree" />
          <img src={logo_Yeahub} alt="logo_Yeahub" />
        </a>
        <nav className="header__nav">
          <ul>
            <li>
              <a>База вопросов</a>
            </li>
            <li>
              <a>Тренажёр</a>
            </li>
            <li>
              <a>Материалы</a>
            </li>
            <li>
              <a>Навыки(hh)</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__buttons">
        <button>Вход</button>
        <button>Регистрация</button>
      </div>
    </header>
  );
}
