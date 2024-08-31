import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ReviewForm.module.css";

const ReviewForm = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <section className={[styles.reviewForm, className].join(" ")}>
      <div className={styles.reviewFormFields}>
        <div className={styles.enterWrapper}>
          <div className={styles.enter}>Enter</div>
        </div>
        <div className={styles.reviewSubject}>
          <div className={styles.reviewSubjectInput}>
            <div className={styles.subject}>Subject</div>
          </div>
          <div className={styles.enterWrapper}>
            <div className={styles.enter}>Enter</div>
          </div>
        </div>
        <div className={styles.reviewSubject1}>
          <div className={styles.reviewSubjectInput}>
            <div className={styles.enterYourReview}>Enter your Review</div>
          </div>
          <div className={styles.descriptionWrapper}>
            <div className={styles.description}>Description</div>
          </div>
        </div>
        <div className={styles.ratingParent}>
          <h2 className={styles.rating}>Rating</h2>
          <div className={styles.ratingStars}>
            <div className={styles.starContainer}>
              <div className={styles.starIcons}>
                <img
                  className={styles.faSolidstarIcon}
                  loading="lazy"
                  alt=""
                  src="/fasolidstar1.svg"
                />
                <img
                  className={styles.faSolidstarIcon}
                  loading="lazy"
                  alt=""
                  src="/fasolidstar-1.svg"
                />
                <img
                  className={styles.faSolidstarIcon}
                  loading="lazy"
                  alt=""
                  src="/fasolidstar-2.svg"
                />
                <img
                  className={styles.faSolidstarIcon}
                  loading="lazy"
                  alt=""
                  src="/fasolidstar-3.svg"
                />
                <img
                  className={styles.faSolidstarIcon}
                  loading="lazy"
                  alt=""
                  src="/fasolidstar-41.svg"
                />
              </div>
              <div className={styles.satisfactionLevel}>
                <div className={styles.satisfied}>Satisfied</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.submitButton}>
          <div className={styles.saveWrapper} onClick={onGroupContainerClick}>
            <div className={styles.save}>Save</div>
          </div>
        </div>
      </div>
    </section>
  );
};

ReviewForm.propTypes = {
  className: PropTypes.string,
};

export default ReviewForm;
