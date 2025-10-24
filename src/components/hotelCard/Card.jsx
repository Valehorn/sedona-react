import './card.scss';
import { useState } from 'react';
import Button from '../button/button';

function Card({ block, data, active }) {
  const { name, type, price, stars, rating, image } = data;
  const [isActive, setIsActive] = useState(active);

  const handleCardButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <article className={`card ${block ? `${block}__card` : ''}`}>
      <a className="card__image-link" href="#" draggable="false">
        <img src={image} alt={name} width="300" height="212" draggable="false" />
      </a>
      <div className={`card__content ${block ? `${block}__card-content` : ''}`}>
        <h2>{name}</h2>
        <div className="card__group">
          <p className="card__type">{type}</p>
          <p className="card__price">От {price} ₽</p>
        </div>
        <div className="card__group">
          <Button className="card__details" classMod="primary" text="Подробнее" isLink />
          <Button
            className="card"
            classMod="secondary"
            classExtra={`${isActive ? `button--active` : ''}`}
            text={isActive ? "В избранном" : "В избранное"}
            isActive={isActive}
            onClick={handleCardButtonClick} />
        </div>
        <div className="card__group">
          <p className={`card__stars ${stars !== 0 || stars !== 1 ? `card__stars--${stars}` : ''}`}>
            <span className="visually-hidden">рейтинг {stars}</span>
          </p>
          <p className="card__rating">Рейтинг: {rating}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
