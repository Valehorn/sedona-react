import './total.scss';
import Intro from '../../components/intro/intro.jsx';
import Button from '../../components/button/button';

function Total() {
  const totalData = {
    title: "Заинтересовались?",
    description: "Укажите предполагаемые даты поездки,<br> и мы покажем вам лучшие предложения гостиниц в Седоне",
  }

  const { title, description } = totalData;

  return (
    <section className="total">
      <Intro title={title} description={description} section="total"></Intro>
      <Button
        className="total"
        classMod="primary"
        classExtra="search-button"
        text="Поиск гостиницы в Седоне"
        isLink
        path="catalog">
      </Button>
    </section>
  );
}

export default Total;
