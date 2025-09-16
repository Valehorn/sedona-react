import './social-link.scss';

function SocialLink({ social, classSection, href }) {
  return (
    <a
      className={`social-link ${classSection ? `${classSection}__social-link` : ''} ${social ? `social-link--${social}` : ''}`}
      href={href}
      draggable="false"
    >
      <span className="visually-hidden">Страница {social}</span>
    </a>
  );
}

export default SocialLink;
