import './standart-input.scss';

function StandartInput({ section, type, name, placeholder, id, isRequired, pattern, onChange, value, errorText }) {
  return (
    <div className="standart-input__container">
      <label>
        <input
          className={`${section ? `${section}__input` : ''} standart-input`}
          type={type}
          name={name}
          placeholder={placeholder || undefined}
          id={id || undefined}
          required={isRequired}
          pattern={pattern}
          onChange={onChange}
          value={value}
        />
      </label>
      {errorText && <span className="standart-input__error">{errorText}</span>}
    </div>
  );
}

export default StandartInput;
