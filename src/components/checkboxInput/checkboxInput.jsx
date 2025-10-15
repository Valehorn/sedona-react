import './checkbox-input.scss';

function CheckboxInput({ item, input, section, checked = false, onChange = () => {} }) {
  return (
    <label>
      <input
        className={`checkbox-input ${section ? `${section}__checkbox-input` : ''}`}
        type="checkbox"
        name={item.title}
        value={input}
        checked={checked}
        onChange={onChange}
      />
      <span>{input}</span>
    </label>
  );
}

export default CheckboxInput;
