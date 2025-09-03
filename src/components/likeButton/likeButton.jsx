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
      onLikeChange(newCount, newIsLiked);
    }
  };

  const containerClass = className ? `${className} ${className}-counter-container` : 'counter-container';
  const counterClass = className ? `${className}-like-counter` : 'like-counter';
  const buttonClass = className
    ? `${className}-button ${className}-button--like ${isLiked ? `${className}-button--liked` : ''}`
    : `button button--like ${isLiked ? 'button--liked' : ''}`;

  return (
    <>
      <span className={containerClass}>
        <span className={counterClass}>{likeCount}</span>
      </span>
      <button
        className={buttonClass}
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
