import { useState, useCallback } from "react";
import Frame from "./Frame";
import PortalPopup from "./PortalPopup";
import Iphone from "./Iphone";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isFrame1Open, setFrame1Open] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const openFrame1 = useCallback(() => {
    setFrame1Open(true);
  }, []);

  const closeFrame1 = useCallback(() => {
    setFrame1Open(false);
  }, []);

  return (
    <>
      <header className={[styles.frameParent, className].join(" ")}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.selectCityParent}>
              <div className={styles.selectCity}>Select City</div>
              <div className={styles.indoreLocationParent}>
                <div className={styles.indoreLocation}>
                  
                  <input type="text" placeholder=" Indore, Madhya Pradesh, India" className={styles.indoreLocation} style={{padding: '0.5rem'}}/>
                  <img
                    className={styles.akarIconslocation}
                    alt=""
                    src="/akariconslocation.svg"
                  />
                </div>
                <div className={styles.findCompanyWrapper}>
                  <a className={styles.findCompany}>Find Company</a>
                </div>
              </div>
            </div>
            <div className={styles.addCompanyWrapper} onClick={openFrame}>
              <a className={styles.addCompany}>+ Add Company</a>
            </div>
            <div className={styles.sortParent}>
              <div className={styles.sort}>Sort:</div>
              <select className={styles.nameParent}>
  <option value="someOption">Some option</option>
  <option value="otherOption">Other option</option>
</select>
              {/* <div className={styles.nameParent}>
                <a className={styles.name}>Name</a>
                <div className={styles.gridiconsdropdownWrapper}>
                  <img
                    className={styles.gridiconsdropdown}
                    alt=""
                    src="/gridiconsdropdown.svg"
                    onClick={openFrame1}
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className={styles.divider} />
      </header>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} />
        </PortalPopup>
      )}
      {isFrame1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame1}
        >
          <Iphone onClose={closeFrame1} />
        </PortalPopup>
      )}
    </>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
