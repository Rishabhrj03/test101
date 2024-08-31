import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ className = "" }) => {
  return (
    <section className={[styles.header, className].join(" ")}>
      <div className={styles.logoPlaceholder}>
        <div className={styles.brandPlaceholder}>
          <div className={styles.reviewEntry}>
            <div className={styles.helloImJishnueAHighSchoo} />
            <div className={styles.reviewStars} />
          </div>
          <div className={styles.reviewerName}>
            <div className={styles.fullName}>Full Name</div>
          </div>
        </div>
        <div className={styles.addReviewButton}>
          <a className={styles.addReview}>Add Review</a>
        </div>
      </div>
      <div className={styles.closeButton}>
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

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
