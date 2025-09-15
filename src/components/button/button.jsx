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
  path = '#'
}) {
  if (isLink) {
    return (
      <Link to={`/${path}`} className={`button ${className}__button ${classExtra ? `${className}__${classExtra}` : ""} button--${classMod}`} draggable="false">
        <span>{text}</span>
        {children}
      </Link>
    );
  }
  return (
    <button className={`button ${className}__button ${classExtra ? `${className}__${classExtra}` : ""} button--${classMod}`} type={type}>
      <span>{text}</span>
      {children}
    </button>
  );
}

export default Button;
