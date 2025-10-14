import { Link } from 'react-router-dom';
import './breadcrumbs.scss';

function BreadcrumbsItem({ link, url, isFirst }) {
  return (
    <li className="breadcrumbs__item">
      <Link
        className={`breadcrumbs__link ${isFirst ? 'breadcrumbs__link--home' : ''}`}
        to={url}
      >
        {!isFirst && link}
        {isFirst && <span className='visually-hidden'>{link}</span>}
      </Link>
    </li>
  );
}

export default BreadcrumbsItem;
