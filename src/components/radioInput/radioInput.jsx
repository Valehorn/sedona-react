import './radio-input.scss';

function RadioInput({ item, input, section, checked, onChange = () => { } }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === 'Space') {
      event.preventDefault();
      onChange({
        target: {
          type: 'radio',
          value: input,
          checked: true
        }
      });
    }
  };

  return (
    <label>
      <input
        className={`radio-input ${section ? `${section}__radio-input` : ''}`}
        type="radio"
        name={item.title}
        value={input}
        checked={checked}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        tabIndex="0"
      />
      <span>{input}</span>
    </label>
  );
};

export default RadioInput;
