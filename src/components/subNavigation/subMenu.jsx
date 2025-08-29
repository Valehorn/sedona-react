import './subMenu.scss'
import '../../assets/image/icons/search.svg';
import '../../assets/image/icons/favorite.svg';
import LikeButton from '../likeButton/likeButton';

function SubMenu() {
  return (
    <ul className="header__sub-menu-list">
      <li className="header__sub-menu-item">
        <button className="header__sub-menu-button header__sub-menu-button--search" type="button">
          <span className="visually-hidden">Поиск</span>
        </button>
      </li>
      <li className="header__sub-menu-item">
        <LikeButton
          initialCount={12}
          className="header__sub-menu"
        />
      </li>
      <li className="header__sub-menu-item">
        <button className="button header__sub-menu-link button--primary" type="button">
          <span>Хочу сюда!</span>
        </button>
      </li>
    </ul>
  );
}

export default SubMenu;
