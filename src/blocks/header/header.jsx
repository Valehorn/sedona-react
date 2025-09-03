import './header.scss';
import Logo from '../../components/logo/logo';
import NavigationList from '../../components/navigationList/navigationList';
import SubMenu from '../../components/subNavigation/subMenu';
import Container from '../container/container';

function Header() {
  return (
    <header className="header">
      <Container>
        <Logo />
        <NavigationList className='header' />
        <SubMenu />
      </Container>
    </header>
  )

}

export default Header;
