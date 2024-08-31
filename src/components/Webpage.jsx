import Header from "./Header";
import ReviewForm from "./ReviewForm";
import PropTypes from "prop-types";
import styles from "./Webpage.module.css";

const Webpage = ({ className = "", onClose }) => {
  return (
    <div className={[styles.webpage, className].join(" ")}>
      <Header />
      <ReviewForm />
    </div>
  );
};

Webpage.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Webpage;
