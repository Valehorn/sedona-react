import './subMenu.scss'
import '../../assets/image/icons/search.svg';
import '../../assets/image/icons/favorite.svg';
import { useState } from 'react';

function SubMenu() {
  const [likeCount, setLikeCount] = useState(12);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(prevCount => prevCount - 1);
    } else {
      setLikeCount(prevCount => prevCount + 1);
    }
    setIsLiked(prev => !prev);
  };

  return (
    <ul className="header__sub-menu-list">
      <li className="header__sub-menu-item">
        <button className="header__sub-menu-button header__sub-menu-button--search" type="button">
          <span className="visually-hidden">Поиск</span>
        </button>
      </li>
      <li className="header__sub-menu-item">
        <span className="header__sub-menu-counter-container">
          <span className="header__sub-menu-like-counter">{likeCount}</span>
        </span>
        <button
          className={`header__sub-menu-button header__sub-menu-button--like ${isLiked ? 'header__sub-menu-button--liked' : ''}`}
          type="button"
          onClick={handleLikeClick}
        >
          <span className="visually-hidden">Нравится</span>
        </button>
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
