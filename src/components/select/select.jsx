import './select.scss';

function Select({ name, id, block, data= [] }) {
  return (
    <select className={`select ${block ? `${block}__select` : ''}`} name={name} id={id}>
      {data.map((option) => {
        return (<option value={option} key={option} defaultValue={data[0]} >{option}</option>)
      })}
    </select>
  );
};

export default Select;
