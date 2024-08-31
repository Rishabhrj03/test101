import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={[styles.cancelButtonContainerWrapper, className].join(" ")}
    >
      <div className={styles.cancelButtonContainer}>
        <div className={styles.cancelButtonInnerContainer}>
          <div className={styles.cancelButtonContent}>
            <div className={styles.cancelButtonContentChild} />
            <div className={styles.addCompanyWrapper}>
              <a className={styles.addCompany}>Add Company</a>
            </div>
          </div>
          <div className={styles.companyName}>Company name</div>
        </div>
        <img
          className={styles.iconoircancel}
          loading="lazy"
          alt=""
          src="/iconoircancel.svg"
        />
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
