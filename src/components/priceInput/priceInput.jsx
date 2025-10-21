import './price-input.scss';

function PriceInput({ price, input, section, onChange = () => { } }) {
  const fieldName = input === 'от' ? 'min' : 'max';

  return (
    <label className={`price-input ${section ? `${section}__price-input` : ''}`}>
      {input}
      <input
        type="number"
        placeholder={input === 'от' ? '0' : '10000'}
        value={price[fieldName]}
        onChange={(evt) => onChange(evt, 'price', fieldName)}
      />
    </label>
  );
}

export default PriceInput;
