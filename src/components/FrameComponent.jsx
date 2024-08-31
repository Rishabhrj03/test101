import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/frame-1.svg"
        />
        <div className={styles.reviewrateWrapper}>
          <a className={styles.reviewrate}>
            <span>
              <span>Review</span>
              <span className={styles.span}>{`&`}</span>
            </span>
            <b className={styles.rate}>Rate</b>
          </a>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameContainer}>
          <div className={styles.searchParent}>
            <a className={styles.search}>Search...</a>
            <img
              className={styles.akarIconssearch}
              alt=""
              src="/akariconssearch.svg"
            />
          </div>
          <div className={styles.loginSignupWrapper}>
            <div className={styles.loginSignup}>
              <a className={styles.login}>Login</a>
              <a className={styles.signup}>SignUp</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
