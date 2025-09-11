import './number-input.scss';
import { useState } from 'react';

function NumberInput({
  className = "",
  classMod = "",
  label = "Выберите количество человек",
  name = "",
  minNumber = 1,
  maxNumber = null,
}) {
  const [value, setValue] = useState(2);

  const handleIncrement = () => {
    if (!maxNumber || value < maxNumber) {
      setValue(prev => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (value > minNumber) {
      setValue(prev => prev - 1);
    }
  };

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value) || minNumber;

    if (newValue < minNumber) {
      setValue(minNumber);
    } else if (maxNumber && newValue > maxNumber) {
      setValue(maxNumber);
    } else {
      setValue(newValue);
    }
  };

  return (
    <div className={`${className ? `${className}__number-input` : ""} number-input`}>
      <label htmlFor={name} className="number-input__label">
        {label}
      </label>
      <div className="number-input__input-container">
        <button
          className="number-input__button number-input__button--decrement"
          type="button"
          onClick={handleDecrement}
          disabled={value <= minNumber}
        ></button>
        <input
          className={`number-input__input ${classMod ? `number-input__input--${classMod}` : ""}`}
          type="number"
          name={name}
          id={name}
          min={minNumber}
          max={maxNumber || null}
          value={value}
          onChange={handleInputChange}
          placeholder="2"
        />
        <button
          className="number-input__button number-input__button--increment"
          type="button"
          onClick={handleIncrement}
          disabled={maxNumber !== null && value >= maxNumber}
        ></button>
      </div>
    </div>
  );
}

export default NumberInput;
