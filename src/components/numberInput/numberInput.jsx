import Tooltip from '../tooltip/tooltip';
import './number-input.scss';
import { useState } from 'react';

const kidsTooltip = {
  description: "Укажите количество детей, <br> которые будут с вами, возраст которых от 6 до <br> 18 лет.Дети до 6 лет размещаются бесплатно."
};

function NumberInput({
  className = "",
  classMod = "",
  label = "Выберите количество человек",
  name = "",
  minNumber = 1,
  maxNumber = null,
  tooltip = false,
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
      {tooltip ? <Tooltip
        className="number-input"
        description={kidsTooltip.description}
        helpNote="Укажите количество детей."
      /> : undefined}
      <div className="number-input__input-container">
        <button
          className="number-input__button number-input__button--decrement"
          type="button"
          onClick={handleDecrement}
          disabled={value <= minNumber}
        ><span className="visually-hidden">Уменьшить количество человек.</span>
        </button>
        <input
          className={`number-input__input ${classMod ? `number-input__input--${classMod}` : ""}`}
          type="number"
          name={name}
          id={name}
          min={minNumber}
          max={maxNumber || undefined}
          value={value}
          onChange={handleInputChange}
          placeholder="2"
        />
        <button
          className="number-input__button number-input__button--increment"
          type="button"
          onClick={handleIncrement}
          disabled={maxNumber !== null && value >= maxNumber}
        >
          <span className="visually-hidden">Увеличить количество человек.</span>
        </button>
      </div>
    </div>
  );
}

export default NumberInput;
