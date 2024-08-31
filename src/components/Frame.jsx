import { useCallback } from "react";
import FrameComponent3 from "./FrameComponent3";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Frame.module.css";

const Frame = ({ className = "", onClose }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <FrameComponent3 />
      <div className={styles.locationDetailsWrapper}>
        <div className={styles.locationDetails}>
          <div className={styles.enter}>Enter...</div>
        </div>
      </div>
      <div className={styles.locationWrapper}>
        <div className={styles.location}>Location</div>
      </div>
      <div className={styles.locationDetailsWrapper}>
        <div className={styles.selectLocationParent}>
          <div className={styles.selectLocation}>Select Location</div>
          <div className={styles.akarIconslocationWrapper}>
            <img
              className={styles.akarIconslocation}
              alt=""
              src="/akariconslocation1.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.locationWrapper}>
        <div className={styles.foundedOn}>Founded on</div>
      </div>
      <div className={styles.dateContainerWrapper}>
        <div className={styles.dateContainer}>
          <div className={styles.ddmmyyyy}>DD/MM/YYYY</div>
          <img className={styles.uiwdateIcon} alt="" src="/uiwdate.svg" />
        </div>
      </div>
      <div className={styles.cityWrapper}>
        <div className={styles.city}>City</div>
      </div>
      <div className={styles.frameChild} />
      <div className={styles.frameContainer}>
        <div className={styles.saveWrapper} onClick={onGroupContainerClick}>
          <div className={styles.save}>Save</div>
        </div>
      </div>
    </div>
  );
};

Frame.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Frame;
