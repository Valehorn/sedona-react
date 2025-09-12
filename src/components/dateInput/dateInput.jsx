import './date-input.scss';
import { useState, useRef, useEffect } from 'react';

function formatDisplayDate(dateString) {
  if (!dateString) return '';

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';

  const day = date.getDate();
  const month = date.toLocaleString('ru-RU', { month: 'long' });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function DateInput({
  className = "",
  classMod = "",
  label = "Выберите дату",
  placeholder = "дд.мм.гггг",
  defaultDate = "",
  name = "",
  inputId = "",
  dataAttr = "",
  onDateChange = () => { },
  minDate = ""
}) {
  const inputRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(defaultDate || getTodayDate());
  const [displayDate, setDisplayDate] = useState(formatDisplayDate(defaultDate || getTodayDate()));

  useEffect(() => {
    if (minDate && selectedDate < minDate) {
      const newDate = minDate;
      setSelectedDate(newDate);
      setDisplayDate(formatDisplayDate(newDate));
      onDateChange(newDate);
    }
  }, [minDate, selectedDate, onDateChange]);

  const handleCalendarClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.showPicker();
    }
  };

  const handleInputChange = (evt) => {
    const dateValue = evt.target.value;
    setSelectedDate(dateValue);
    setDisplayDate(formatDisplayDate(dateValue));
    onDateChange(dateValue);
  };

  return (
    <div className={`${className ? `${className}__date-input` : ""} date-input`}>
      {label && (
        <label className="date-input__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        ref={inputRef}
        className={`date-input__input ${classMod ? `date-input__input--${classMod}` : ""}`}
        type="date"
        value={selectedDate}
        onChange={handleInputChange}
        id={inputId}
        name={name}
        min={minDate}
        {...(dataAttr && { 'data-display': displayDate || placeholder })}
      />
      <button
        type="button"
        onClick={handleCalendarClick}
        className="date-input__calendar-button"
        aria-label="Выбрать дату."
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="none" viewBox="0 0 16 15">
          <path fill="#000" d="M5.75 10c.3 0 .5-.2.5-.5s-.2-.5-.5-.5-.5.2-.5.5.2.5.5.5Z" />
          <path fill="#000"
            d="M15 2h-2V0h-1v2H4V0H3v2H1c-.6 0-1 .4-1 1v11c0 .5.4 1 1 1h14c.5 0 1-.5 1-1V3c0-.6-.5-1-1-1Zm0 12H1V7h14v7ZM1 6V3h2v2h1V3h8v2h1V3h2v3H1Z" />
          <path fill="#000"
            d="M8 10c.3 0 .5-.2.5-.5S8.3 9 8 9s-.5.2-.5.5.2.5.5.5ZM10.25 10c.3 0 .5-.2.5-.5s-.2-.5-.5-.5-.5.2-.5.5.2.5.5.5ZM5.75 11c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5ZM3.5 10c.3 0 .5-.2.5-.5S3.8 9 3.5 9s-.5.2-.5.5.2.5.5.5ZM3.5 11c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5ZM8 11c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5ZM10.25 11c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5ZM12.5 10c.3 0 .5-.2.5-.5s-.2-.5-.5-.5-.5.2-.5.5.2.5.5.5ZM12.5 11c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5Z" />
        </svg>
      </button>
    </div>
  );
}

export default DateInput;
