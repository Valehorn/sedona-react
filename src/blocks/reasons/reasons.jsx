import './reasons.scss';
import photo1 from '../../assets/image/reasons/photo-1.jpg';
import photo2 from '../../assets/image/reasons/photo-2.jpg';
import ReasonsItem from '../../components/reasonsItem/reasonsItem';
import Intro from '../../components/intro/intro';
import Container from '../container/container.jsx';

function Reasons() {
  const reasonsData = [
    {
      title: "Настоящий <br> городок",
      description: "Седона — не аттракцион для <br> туристов, там течёт своя <br> жизнь",
      image: photo1,
      alt: "Уголки Седоны.",
      mod: "primary"
    },
    {
      title: "Небольшая <br> площадь",
      description: "Все достопримечательности <br> находятся очень близко",
      mod: "secondary"
    },
    {
      title: "Красивая <br> дорога",
      description: "Ехать в Седону из Лас-Вегаса <br> совсем не скучно!",
      mod: "accent"
    },
    {
      title: "Мало <br> туристов",
      description: "Большинство едет в Гранд <br> Каньон и толпится там",
      mod: "secondary"
    },
    {
      title: "Там есть <br> мост дьявола",
      description: "Да, по нему можно пройти! <br> Если вы осмелитесь, <br> разумеется",
      image: photo2,
      alt: "Мост дьявола",
      mod: "primary",
      mod2: "reversed"
    },
  ];

  const reasonIntro = {
    title: "Седона — небольшой городок в Аризоне, <br> заслуживающий большего!",
    description: "Рассмотрим причины, по которым Седона круче, чем Гранд-Каньон!",
  };

  return (
    <section className="reasons">
      <Container>
        <h2 className="visually-hidden">Почему вам следует посетить Седону.</h2>
        <Intro
          section="reasons"
          title={reasonIntro.title}
          description={reasonIntro.description}
        />
        <ul className="reasons__list">
          {reasonsData.map((item) => {
            return (
              <ReasonsItem
                key={item.title}
                classMod1={item.mod}
                classMod2={item.mod2}
                title={item.title}
                description={item.description}
                image={item.image}
                alt={item.alt}
              />
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export default Reasons;
