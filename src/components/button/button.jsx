import './button.scss';
import { Link } from 'react-router-dom';

function Button({ className, classMod, classExtra, type = 'button', text, isLink = false, path = "#" }) {
  if (isLink) {
    return (
      <Link to={`/${path}`} className={`button ${className}__button ${classExtra ? `${className}__${classExtra}` : ""} button--${classMod}`}>
        <span>{text}</span>
      </Link>
    );
  }
  return (
    <button className={`button ${className}__button ${classExtra ? `${className}__${classExtra}` : ""} button--${classMod}`} type={type}>
      <span>{text}</span>
    </button>
  );
}

export default Button;
