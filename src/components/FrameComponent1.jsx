import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  className = "",
  foundedOn01012016,
  propDisplay,
  propMinWidth,
  onGroupContainerClick,
}) => {
  const foundedOn01012016Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const navigate = useNavigate();

  const onGroupContainerClick1 = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={[styles.foundedReviewWrapper, className].join(" ")}>
      <div className={styles.foundedReview}>
        <div className={styles.foundedDate}>
          <div
            className={styles.foundedOn01012016}
            style={foundedOn01012016Style}
          >
            {foundedOn01012016}
          </div>
        </div>
        <div
          className={styles.detailReviewWrapper}
          onClick={onGroupContainerClick}
        >
          <div className={styles.detailReview}>Detail Review</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  foundedOn01012016: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,

  /** Action props */
  onGroupContainerClick: PropTypes.func,
};

export default FrameComponent1;
