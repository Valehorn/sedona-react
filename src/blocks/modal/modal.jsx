import DateInput from '../../components/dateInput/dateInput.jsx';
import './modal.scss';

function Modal() {
  return (
    <div className="modal">
      <dialog className="modal__inner">
        <button className="modal__button-close">
          <span className="visually-hidden">Кнопка закрытия модального окна.</span>
        </button>
        <h2>Поиск гостиницы в седоне</h2>
        <form action="/" className="modal__form" method="post">
          <DateInput
            classMod="date-in"
            label="Дата Заезда:"
            placeholder="Укажите Дату"
            name="Date in"
            inputId="Date in"
          />
          <DateInput
            classMod="date-out"
            label="Дата Выезда:"
            placeholder="Укажите Дату"
            name="Date out"
            inputId="Date out"
          />
        </form>
      </dialog>
    </div>
  );
}

export default Modal;
