import './modal.scss';
import Button from '../../components/button/button.jsx';
import DateInput from '../../components/dateInput/dateInput.jsx';
import NumberInput from '../../components/numberInput/numberInput.jsx';
import { useModal } from '../../contexts/modalContext/useModal.jsx';
import { useRef, useEffect, useState } from 'react';

function Modal() {
  const { isModalOpen, closeModal } = useModal();
  const dialogRef = useRef(null);
  const [dateIn, setDateIn] = useState('');
  const [dateOut, setDateOut] = useState('');
  const [dateError, setDateError] = useState('');

  const getFocusableElements = () => {
    if (!dialogRef.current) {
      return [];
    }
    return Array.from(
      dialogRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter((element) => !element.hasAttribute('disabled'));
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !isModalOpen) {
      return;
    }

    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) {
      return;
    }

    const firstElement = focusableElements[0];

    const handleTabKey = (evt) => {
      if (evt.key !== 'Tab') {
        return;
      }

      const focusableElements = getFocusableElements();
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (!focusableElements.includes(activeElement)) {
        evt.preventDefault();
        firstElement.focus();
        return;
      }

      if (evt.shiftKey) {
        if (activeElement === firstElement) {
          evt.preventDefault();
          lastElement.focus();
        }
      } else {
        if (activeElement === lastElement) {
          evt.preventDefault();
          firstElement.focus();
        }
      }
    };

    const handleCancel = (evt) => {
      evt.preventDefault();
      closeModal();
    };

    setTimeout(() => {
      firstElement.focus();
    }, 100);

    document.addEventListener('keydown', handleTabKey);
    dialog.addEventListener('cancel', handleCancel);

    return () => {
      document.removeEventListener('keydown', handleTabKey);
      dialog.removeEventListener('cancel', handleCancel);
    };
  }, [isModalOpen, closeModal]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isModalOpen) {
      dialog.showModal();
      setDateError('');

      const handleClick = (evt) => {
        const rect = dialog.getBoundingClientRect();
        const isInDialog = (
          rect.top <= evt.clientY &&
          evt.clientY <= rect.top + rect.height &&
          rect.left <= evt.clientX &&
          evt.clientX <= rect.left + rect.width
        );

        if (!isInDialog) {
          closeModal();
        }
      };

      dialog.addEventListener('click', handleClick);

      return () => {
        dialog.removeEventListener('click', handleClick);
      };
    } else {
      dialog.close();
    }
  }, [isModalOpen, closeModal]);

  const validateDates = () => {
    if (!dateIn || !dateOut) {
      setDateError('Пожалуйста, заполните обе даты');
      return false;
    }

    const inDate = new Date(dateIn);
    const outDate = new Date(dateOut);

    if (outDate <= inDate) {
      setDateError('Дата выезда должна быть позже даты въезда');
      return false;
    }

    setDateError('');
    return true;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (validateDates()) {
      console.log('Форма отправлена:', { dateIn, dateOut });
      closeModal();
    }
  };

  return (
    <dialog
      className="modal"
      ref={dialogRef}
    >
      <div className="modal__content">
        <div className="modal__button-close-container">
          <button
            className="modal__button-close"
            onClick={closeModal}
            aria-label="Закрыть модальное окна"
          >
            <span className="visually-hidden">Кнопка закрытия модального окна.</span>
          </button>
        </div>
        <h2>Поиск гостиницы в седоне</h2>
        <form className="modal__form" action="#" method="post" onSubmit={handleSubmit}>
          <div className="modal__inputs">
            <DateInput
              className="modal"
              classMod="date-in"
              label="Дата Заезда:"
              placeholder="Укажите Дату"
              name="Date in"
              inputId="Date in"
              dataAttr
              onDateChange={setDateIn}
              minDate={getTodayDate()}
            />
            <DateInput
              className="modal"
              classMod="date-out"
              label="Дата Выезда:"
              placeholder="Укажите Дату"
              name="Date out"
              inputId="Date out"
              dataAttr
              onDateChange={setDateOut}
              minDate={dateIn || getTodayDate()}
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
          {dateError && (
            <div className="modal__error">
              {dateError}
            </div>
          )}
          <Button className="modal" classMod="secondary" type="submit" text="Найти" />
        </form>
      </div>
    </dialog>
  );
}

function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default Modal;
