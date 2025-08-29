import './header.scss';
import Logo from '../../components/logo/logo';
import NavigationList from '../../components/navigationList/navigationList';
import SubMenu from '../../components/subNavigation/subMenu';

function Header() {
    return (
        <header className="header">
          <Logo />
          <NavigationList />
          <SubMenu />
        </header>
    )

}

export default Header;
