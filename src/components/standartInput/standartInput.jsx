import './standart-input.scss';

function StandartInput({ section, type, name, placeholder, id, isRequired }) {
  return (
    <>
      <label>
        <input
          className={`${section ? `${section}__input` : undefined} standart-input`}
          type={type}
          name={name}
          placeholder={placeholder || undefined}
          id={id || undefined}
          required={isRequired || undefined}
          />
      </label>
    </>
  );
}

export default StandartInput;
