import PropTypes from "prop-types";

function Card({img, name, size}) {
  return (
    <>
      <img className="gallery__image" src={img} alt={name} />
      <h3 className="gallery__name">{name}</h3>
      <span className="gallery__characteristics">Tamaño: {size}</span>
    </>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
};

export default Card;