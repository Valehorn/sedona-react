import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Container from '../container/container';
import './filter.scss'

function Filter() {
  const breadcrumbs = [
    {
      link: 'Главная',
      url: '/',
    },
    {
      link: 'Гостиницы',
      url: '#',
    }
  ];

  return (
    <section className="filter">
      <Container>
        <h1 className="filter__title">Гостиницы Седоны</h1>
        <form className="filter__form" action="/" method='post'>
          <Breadcrumbs items={breadcrumbs}  section="filter"/>
        </form>
      </Container>
    </section>
  );
}

export default Filter;
