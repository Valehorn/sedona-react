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
        <Breadcrumbs items={breadcrumbs} section="filter" />
        <form className="filter__form" action="/" method='post'>
        </form>
      </Container>
    </section>
  );
}

export default Filter;
