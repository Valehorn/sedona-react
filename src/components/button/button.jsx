import './button.scss';
import { Link } from 'react-router-dom';

function Button({
  className,
  classMod = '',
  classExtra = '',
  type = 'button',
  text,
  children,
  isLink = false,
  isInnerLink = false,
  path = '#',
  onClick= () => {},
}) {

  if (isInnerLink) {
    return (
      <Link to={`/${path}`} className={`button ${className}-link ${classExtra ? `${className}__${classExtra}` : ""} button--${classMod}`} draggable="false">
        <span>{text}</span>
        {children}
      </Link>
    );
  } else if (isLink) {
    return (
      <a href={`/${path}`} className={`button ${className}-link ${classExtra ? `${className}__${classExtra}` : ""} button--${classMod}`} draggable="false">
        <span>{text}</span>
        {children}
      </a>
    );
  } else {
    return (
      <button className={`button ${className}__button ${classExtra ? `${className}__${classExtra}` : ""} button--${classMod}`} type={type} onClick={onClick}>
        <span>{text}</span>
        {children}
      </button>
    );
  }
}

export default Button;
