import './navigationList.scss';

function NavigationList() {
  const navigationData = ['Главная', 'О Седоне', 'Гостиницы']

  return (
    <nav className="header__navigation">
      <ul className="header__navigation-list">
        {navigationData.map((item, index) => (
          <li
            key={index}
            className="header__navigation-item"
            aria-current={index === 0 ? "page" : undefined}
          >
            <a href={item} className={`header__navigation-link ${index === 0 ? "header__navigation-link--current" : undefined}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationList;
