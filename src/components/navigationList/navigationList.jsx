import './navigationList.scss';

function NavigationList() {
  const navigationData = ['Главная', 'О Седоне', 'Гостиницы']

  return (
    <ul className="header__navigation-list">
      {navigationData.map((item, index) => (
        <li
          key={index}
          className="header__navigation-item"
          aria-current={index === 0 ? "page" : undefined}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default NavigationList;
