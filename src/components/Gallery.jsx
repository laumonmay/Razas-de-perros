import PropTypes from "prop-types";
import Card from "./Card";

function Gallery({ listDogs }) {
  const htmlListDogs = listDogs.map((dog, index) => (
    <li key={index} className="gallery__card">
      <Card img={dog.img_url} name={dog.breed} size={dog.size}/>
    </li>
  ));
  return <ul className="gallery">{htmlListDogs}</ul>;
}

Gallery.propTypes = {
  listDogs: PropTypes.array.isRequired,
};

export default Gallery;
