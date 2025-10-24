import './view-button.scss';

function ViewButton({ info, current, onClick= () => {} }) {
  return (
    <button className={`view-button view-button--${info} ${ current === info ? `view-button--current` : ''}`} type="button" onClick={onClick}>
      <span className="visually-hidden">{info}</span>
    </button>
  );
};

export default ViewButton;
