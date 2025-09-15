import './subscription.scss';
import Intro from '../../components/intro/intro';
import StandartInput from '../../components/standartInput/standartInput';
import Button from '../../components/button/button.jsx';
import { useState, useRef } from 'react';

function Subscription({ main }) {
  const subscriptionData = {
    title: "Подпишись на рассылку",
    description: "Только полезная информация и никакого спама,<br> честное бойскаутское!",
    error: "Введите корректный email (формат: xxx@xxx.xx)",
  }

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const formRef = useRef(null);

  const emailPattern = '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$';

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = new RegExp(emailPattern);
    if (!regex.test(email)) {
      setEmailError(subscriptionData.error);
      return;
    }
    if (formRef.current) {
      setEmail('');
      alert('Вы успешно подписались!');
      /*  Отправка формы
       formRef.current.submit(); */
    }
  };

  return (
    <section className={`subscription ${main ? `subscription--background` : undefined}`}>
      <Intro
        section="subscription"
        title={subscriptionData.title}
        description={subscriptionData.description} />
      <form
        action="/"
        className="subscription__form"
        onSubmit={handleSubmit}
        ref={formRef}
        method="POST"
        noValidate
      >
        <StandartInput
          section="subscription"
          type="email"
          name="email"
          placeholder="Ваш e-mail"
          isRequired={true}
          pattern={emailPattern}
          value={email}
          onChange={handleEmailChange}
          errorText={emailError}
        />
        <Button
          className="subscription"
          classMod="secondary"
          type="submit"
          text="Подписаться"
        />
      </form>
    </section>
  );
}

export default Subscription;
