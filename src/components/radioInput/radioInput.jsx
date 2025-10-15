import './radio-input.scss';

function RadioInput({ item, input, section, checked, onChange = () => { } }) {
  return (
    <label>
      <input
        className={`radio-input ${section ? `${section}__radio-input` : ''}`}
        type="radio"
        name={item.title}
        value={input}
        checked={checked}
        onChange={onChange}
      />
      <span>{input}</span>
    </label>
  );
};

export default RadioInput;
