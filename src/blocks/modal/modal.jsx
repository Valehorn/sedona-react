import './modal.scss';
import Button from '../../components/button/button.jsx';
import DateInput from '../../components/dateInput/dateInput.jsx';
import NumberInput from '../../components/numberInput/numberInput.jsx';
import { useModal } from '../../contexts/modalContext/useModal.jsx';
import { useRef, useEffect } from 'react';

function Modal() {
  const { isModalOpen, closeModal } = useModal();
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isModalOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isModalOpen]);

  return (
    <dialog className="modal" ref={dialogRef}>
      <div className="modal__button-close-container">
        <button className="modal__button-close" onClick={closeModal}>
          <span className="visually-hidden">Кнопка закрытия модального окна.</span>
        </button>
      </div>
      <h2>Поиск гостиницы в седоне</h2>
      <form action="/" className="modal__form" method="post">
        <div className="modal__inputs">
          <DateInput
            className="modal"
            classMod="date-in"
            label="Дата Заезда:"
            placeholder="Укажите Дату"
            name="Date in"
            inputId="Date in"
            dataAttr
          />
          <DateInput
            className="modal"
            classMod="date-out"
            label="Дата Выезда:"
            placeholder="Укажите Дату"
            name="Date out"
            inputId="Date out"
            dataAttr
          />
          <NumberInput
            className="modal"
            classMod="adult"
            label="Взрослые:"
            name="adult"
            maxNumber="50"
          />
          <NumberInput
            className="modal"
            classMod="kids"
            label="Дети:"
            name="kids"
            maxNumber="50"
            tooltip
          />
        </div>
        <Button className="modal" classMod="secondary" type="submit" text="Найти" />
      </form>
    </dialog>
  );
}

export default Modal;
