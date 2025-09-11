import './tooltip.scss';

function Tooltip({className, description, helpNote='Подсказка.'}) {
  return (
    <div className={`${className ? `${className}__tooltip` : ""} tooltip`}>
      <div className="tooltip__inner">
        <button className="tooltip__button" type="button">
          <span className="visually-hidden">{helpNote}</span>
        </button>
        <div className="tooltip__descritpion">
          <span dangerouslySetInnerHTML={{ __html: description }} role="tooltip"></span>
        </div>
      </div>
    </div>
  );
}

export default Tooltip;
