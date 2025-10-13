import './breadcrumbs.scss';
import BreadcrumbsItem from './breadcrumbsItem';

function Breadcrumbs({ items, section }) {
  return (
    <ol className={`breadcrumbs ${section ? `${section}__breadcrumbs` : ''}`}>
      {items.map((item, index) => (
        <BreadcrumbsItem
          key={index}
          link={item.link}
          url={item.url}
          isFirst={index === 0}
        />
      ))}
    </ol>
  );
}

export default Breadcrumbs;
