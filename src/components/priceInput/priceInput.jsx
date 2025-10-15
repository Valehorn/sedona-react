import './price-input.scss';

function PriceInput({ price, input, section, onChange = () => {} }) {
  return (
    <label>
      {input}
      <input
        className={`price-input ${section ? `${section}__price-input` : ''}`}
        type="number"
        placeholder={input === 'от' ? '0' : '10000'}
        value={price[input === 'от' ? 'min' : 'max']}
        onChange={(evt) => onChange(
          evt,
          'price',
          input === 'от' ? 'min' : 'max'
        )}
      />
    </label>
  );
}

export default PriceInput;
