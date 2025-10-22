import './checkbox-input.scss';

function CheckboxInput({ item, input, section, checked = false, onChange = () => {} }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === 'Space') {
      event.preventDefault();
      onChange({
        target: {
          type: 'checkbox',
          value: input,
          checked: !checked
        }
      });
    }
  };

  return (
    <label>
      <input
        className={`checkbox-input ${section ? `${section}__checkbox-input` : ''}`}
        type="checkbox"
        name={item.title}
        value={input}
        checked={checked}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <span>{input}</span>
    </label>
  );
}

export default CheckboxInput;
