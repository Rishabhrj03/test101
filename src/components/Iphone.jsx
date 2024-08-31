import PropTypes from "prop-types";
import styles from "./Iphone.module.css";

const Iphone = ({ className = "", onClose }) => {
  return (
    <div className={[styles.iphone, className].join(" ")}>
      <div className={styles.filter}>
        <div className={styles.nameFilter}>
          <a className={styles.name}>Name</a>
          <div className={styles.dropdownFilter}>
            <img
              className={styles.gridiconsdropdown}
              alt=""
              src="/gridiconsdropdown.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.separator}>
        <div className={styles.instagram} />
      </div>
      <div className={styles.header}>
        <a className={styles.name}>Name</a>
      </div>
      <div className={styles.header1}>
        <div className={styles.average}>Average</div>
      </div>
      <div className={styles.header1}>
        <a className={styles.rating}>Rating</a>
      </div>
      <div className={styles.footer}>
        <div className={styles.location}>Location</div>
      </div>
    </div>
  );
};

Iphone.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Iphone;
