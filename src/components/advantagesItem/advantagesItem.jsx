function AdvantagesItem({ classMod1, classMod2, title, description }) {
  return (
    <li className={`advantages__item advantages__item--${classMod1} ${classMod2 ? `advantages__item--${classMod2}` : ''}`}>
      <div className="advantages__item-description">
        <h3 dangerouslySetInnerHTML={{ __html: title }} />
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </li>
  );
}

export default AdvantagesItem;
