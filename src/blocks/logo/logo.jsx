import logo from '../../assets/image/logo-header.svg';
import './logo.scss';

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Логотип Седона" className="logo__image" draggable="false" />
    </div>
  )
}

export default Logo;
