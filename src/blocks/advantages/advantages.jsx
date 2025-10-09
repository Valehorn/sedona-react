import './advantages.scss'
import Intro from '../../components/intro/intro.jsx';
import AdvantagesItem from '../../components/advantagesItem/advantagesItem.jsx';

function Advantages() {
  const advantagesData = [
    {
      title: "Жильё",
      description: "Рекомендуем пожить <br> в настоящем мотеле, <br> всё как в кино!",
      mod: "accent",
      mod2: "housing",
    },
    {
      title: "Еда",
      description: "Всегда заказывайте <br> топовый фирменный бургер, <br> вы не разочаруетесь!",
      mod: "food",
    },
    {
      title: "Сувениры",
      description: "Не только китайского, <br> но и настоящего местного <br> производства!",
      mod: "accent",
      mod2: "souvenirs",
    },
  ];


  const advantagesIntro = {
    title: "Приезжайте в Седону отдохнуть <br> в комфорте и уюте!",
    description: "Опытный персонал и качественное обслуживание",
  };

  return (
    <section className="advantages">
      <Intro
        section="advantages"
        title={advantagesIntro.title}
        description={advantagesIntro.description} />
      <ul className="advantages__list">
        {advantagesData.map((item) => {
          return (
            <AdvantagesItem
              key={item.mod2 || item.mod}
              classMod1={item.mod}
              classMod2={item.mod2}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default Advantages;
