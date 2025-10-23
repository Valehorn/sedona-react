import './card.scss';

function Card({ block, data }) {
  return (
    <article className={`card  ${ block ? `${block}__card` : ''}`}>
      <img src={data.image} alt={data.name} width="300" height="212" draggable={false} />
      <h2>{data.name}</h2>
    </article>
  );
};

export default Card;
