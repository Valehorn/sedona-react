import { useState } from 'react';

function LikeButton({
  initialCount = 0,
  onLikeChange,
  className = '',
}) {
  const [likeCount, setLikeCount] = useState(initialCount);
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    const newIsLiked = !isLiked;
    const newCount = newIsLiked ? likeCount + 1 : likeCount - 1;

    setLikeCount(newCount);
    setIsLiked(newIsLiked);

    if (onLikeChange) {
      onLikeChange(newCount, newIsLiked); // для отладки
    }
  };

  return (
    <>
      <span className={`${className}-counter-container`}>
        <span className={`${className}-like-counter`}>{likeCount}</span>
      </span>
      <button
        className={`${className}-button ${className}-button--like ${isLiked ? `${className}-button--liked` : ''}`}
        onClick={handleClick}
        type="button"
        aria-pressed={isLiked}
      >
        <span className="visually-hidden">
          {isLiked ? 'Убрать лайк' : 'Поставить лайк'}
        </span>
      </button>
    </>
  );
}

export default LikeButton;
