import './intro.scss';

function Intro({ section, title, description }) {
  return (
    <div className={`${section ? `${section}__intro` : ''} intro`}>
      <p dangerouslySetInnerHTML={{ __html: title }}></p>
      <p>{description}</p>
    </div>
  );
}

export default Intro;
