import './subscription.scss';
import Intro from '../../components/intro/intro';
import StandartInput from '../../components/standartInput/standartInput';
import Button from '../../components/button/button.jsx';

function Subscription({ main }) {
  const subscriptionData = {
    title: "Подпишись на рассылку",
    description: "Только полезная информация и никакого спама,<br> честное бойскаутское!",
  }

  return (
    <section className={`subscription ${main ? `subscription--background` : undefined}`}>
      <Intro
        section="subscription"
        title={subscriptionData.title}
        description={subscriptionData.description} />
      <form action="/" className="subcription__form">
        <StandartInput
          section="subscription"
          type="email"
          name="subscription"
          placeholder="Ваш e-mail"
          isRequired />
        <Button
          className="subscription"
          classMod="secondary"
          type="submit"
          text="Подписаться" />
      </form>
    </section>
  );
}

export default Subscription;
