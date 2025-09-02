import { Link, useLocation } from 'react-router-dom';
import './navigationList.scss';

function NavigationList() {
  const location = useLocation();
  const navigationData = [
    { title: 'Главная', path: '/' },
    { title: 'О Седоне', path: '/about' },
    { title: 'Гостиницы', path: '/catalog' }
  ];

  return (
    <nav className="header__navigation">
      <ul className="header__navigation-list">
        {navigationData.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <li
              key={index}
              className="header__navigation-item"
              aria-current={isActive ? "page" : undefined}
            >
              <Link
                to={item.path}
                className={`header__navigation-link ${isActive ? "header__navigation-link--current" : ""}`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavigationList;
