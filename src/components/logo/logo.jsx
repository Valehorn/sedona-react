import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/image/logo-header.svg';
import './logo.scss';

function Logo() {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  if (isMainPage) {
    return (
      <div className="logo">
        <img src={logo} alt="Логотип Седона" className="logo__image" draggable="false" />
      </div>
    );
  }

  return (
    <Link to="/" className="logo">
      <img src={logo} alt="Логотип Седона" className="logo__image" draggable="false" />
    </Link>
  );
}

export default Logo;
