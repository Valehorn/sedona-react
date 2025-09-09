import { useModal } from '../../contexts/modalContext/useModal.jsx';
import '../../assets/image/icons/search.svg';
import '../../assets/image/icons/favorite.svg';
import LikeButton from '../likeButton/likeButton';
import Button from '../button/button';

function SubMenu() {
  const { openModal } = useModal();

  return (
    <ul className="header__sub-menu-list">
      <li className="header__sub-menu-item">
        <button
          className="header__sub-menu-button header__sub-menu-button--search"
          type="button"
          onClick={openModal}
        >
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
        <Button
          className="header"
          classMod="primary"
          classExtra="sub-menu-link"
          text="Хочу сюда!"
        />
      </li>
    </ul>
  );
}

export default SubMenu;
