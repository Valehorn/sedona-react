import './standart-pagination.scss';

function StandartPagination({ data = [] }) {
  return (
    <ul className="standart-pagination">
      {data.map((item) => {
        return (
          <li className="standart-pagination__item" key={item.id}>
            <button
              className={`button standart-pagination__button ${item.isCurrent ? 'standart-pagination__button--current' : ''}`}
              type="button"
            >
              {item.page}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default StandartPagination;
