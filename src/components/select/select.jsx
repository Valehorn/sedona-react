import './select.scss';
import { useState, useRef } from 'react';

function Select({
  name,
  id,
  block,
  data = [],
  description,
  value,
  onChange = () => { },
  onClick = () => { }, }) {
  const [isOpen, setIsOpen] = useState(false);
  const labelRef = useRef(null);

  const toggleSelect= () => {
    setIsOpen(!isOpen);
    onClick();

    if (labelRef.current) {
      const rotation = isOpen ? '0deg' : '180deg';
      labelRef.current.style.setProperty('--select-arrow-rotate', rotation);
    }
  };

  const handleSelectClick = () => {
    toggleSelect();
  };

  const handleSelectBlur = () => {
    setIsOpen(false);

    if (labelRef.current) {
      labelRef.current.style.setProperty('--select-arrow-rotate', '0deg');
    }
  };

  const handleKeyDown = (evt) => {
    if (evt.key === 'Enter') {
      toggleSelect();
    }
  };

  return (
    <label
      ref={labelRef}
      className={`${block ? `${block}__select-label` : ''}`}
      htmlFor={id}
    >
      <span className="visually-hidden">{description}</span>
      <select
        className={`select ${block ? `${block}__select` : ''}`}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onClick={handleSelectClick}
        onKeyDown={handleKeyDown}
        onBlur={handleSelectBlur}
      >
        {data.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          )
        })}
      </select>
    </label>
  );
};

export default Select;
