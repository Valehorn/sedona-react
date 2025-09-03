import './hero.scss';
import welcomeImage from '../../assets/image/welcome-image.jpg';
import Container from '../container/container.jsx'

function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero__image-container">
          <img src={welcomeImage} className="hero__image" alt="Горы Седоны." width="1200" height="485" draggable="false" />
        </div>
        <h1 className="visually-hidden">Город Седона.</h1>
      </Container>
    </section>
  );
}

export default Hero;
