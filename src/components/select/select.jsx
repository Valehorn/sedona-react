import './select.scss';

function Select({ name, id, block, data = [], value, onChange = () => { } }) {
  return (
    <select
      className={`select ${block ? `${block}__select` : ''}`}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
    >
      {data.map((option) => {
        return (
          <option value={option} key={option}>
            {option}
          </option>
        )
      })}
    </select>
  );
};

export default Select;
