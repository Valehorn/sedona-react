function ReasonsItem({ classMod1, classMod2, title, description, image, alt }) {
  return (
    <li className={`reasons__item reasons__item--${classMod1} ${classMod2 ? `reasons__item--${classMod2}` : ''}`} key={title}>
      <div className="reasons__item-description">
        <h3 dangerouslySetInnerHTML={{ __html: title }} />
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
      {image ? <div className="reasons__image-container">
        <img src={image} alt={alt} width={800} height={385} draggable="false" />
      </div> : undefined}
    </li>
  );
}

export default ReasonsItem;
