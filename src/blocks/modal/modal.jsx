import './modal.scss';
import { useRef, useEffect } from 'react';
import DateInput from '../../components/dateInput/dateInput.jsx';
import NumberInput from '../../components/numberInput/numberInput.jsx';

function Modal() {
  const closeButtonRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    closeButtonRef.current = document.querySelector('.modal__button-close');
  }, []);

  const closeModal = () => {
    if (!closeButtonRef && !modalRef) {
      return;
    }
    modalRef.current.close();

  };


  return (
    <dialog className="modal" ref={modalRef}>
      <button className="modal__button-close" onClick={closeModal}>
        <span className="visually-hidden">Кнопка закрытия модального окна.</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 15 15">
          <path fill="currentColor"
            d="M14.5 1.78 13.2.5 7.49 6.2 1.79.5.48 1.8l5.7 5.7-5.7 5.7 1.3 1.3 5.7-5.7 5.7 5.7 1.3-1.3-5.7-5.7 5.7-5.7Z" />
        </svg>
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
        <NumberInput
          classMod="adult"
          label="Взрослые"
          name="adult"
          maxNumber="50"
        />
        <NumberInput
          classMod="kids"
          label="Дети"
          name="kids"
          maxNumber="50"
        />
      </form>
    </dialog>
  );
}

export default Modal;
