import PropTypes from "prop-types";

function Form({ handleFilter }) {
  const handleInput = (event) => {
    handleFilter(event.currentTarget.value);
  };

  return (
    <form className="form">
      <input
        className="filter"
        type="text"
        id=""
        name=""
        placeholder="Escribe aquí"
        onInput={handleInput}
      />
    </form>
  );
}
Form.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Form;
