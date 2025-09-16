import './footer.scss';
import htmlAcademyLogo from '../../assets/image/icons/htmlacademy-logo.svg';
import SocialLink from '../../components/socialLink/socialLink';

function Footer() {
  const footerSocial = [
    {
      social: 'vk',
      href: 'https://htmlacademy.ru/',
    },
    {
      social: 'telegram',
      href: 'https://t.me/htmlacademy',
    },
    {
      social: 'youtube',
      href: 'https://www.youtube.com/user/htmlacademyru',
    }
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__social-list">
          {footerSocial.map((socialData, index) => {
            return (
              <li className="footer__social-item" key={index}>
                <SocialLink
                  social={socialData.social}
                  href={socialData.href}
                />
              </li>
            );
          })}
        </ul>
        <a className="footer__tel" href="tel:78128121212" draggable="false">+7 (812) 812-12-12</a>
        <a className="footer__develop-logo-link" href="https://htmlacademy.ru/" draggable="false">
          <img className="footer__develop-logo-image" src={htmlAcademyLogo} alt="Лого htmlAcademy" width="115" height="34" draggable="false" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
