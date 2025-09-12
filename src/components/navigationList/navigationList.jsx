import { Link, useLocation } from 'react-router-dom';

function NavigationList({className = ''}) {
  const location = useLocation();
  const navigationData = [
    { title: 'Главная', path: '/' },
    { title: 'О Седоне', path: '/about' },
    { title: 'Гостиницы', path: '/catalog' }
  ];

  return (
    <nav className={`${className}__navigation`}>
      <ul className={`${className}__navigation-list`}>
        {navigationData.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <li
              key={index}
              className={`${className}__navigation-item`}
              aria-current={isActive ? "page" : undefined}
            >
              <Link
                to={item.path}
                className={`${className}__navigation-link ${isActive ? `${className}__navigation-link--current` : ""}`}
                draggable="false"
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
