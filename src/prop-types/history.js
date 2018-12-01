import PropTypes from "prop-types";

export default PropTypes.shape({
  push: PropTypes.func.isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.string
  })
});
