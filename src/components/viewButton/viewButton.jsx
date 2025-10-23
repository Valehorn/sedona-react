import './view-button.scss';

function ViewButton({ info }) {
  return (
    <button className={`view-button view-button--${info}`} type="button">
      <span className="visually-hidden">{info}</span>
    </button>
  );
};

export default ViewButton;
