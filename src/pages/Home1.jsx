import { useState, useCallback } from "react";
import Webpage from "../components/Webpage";
import PortalPopup from "../components/PortalPopup";
import FrameComponent from "../components/FrameComponent";
import styles from "./Home1.module.css";
import { element } from "prop-types";
import ReviewPage from "../components/ReviewPage";

const Home1 = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className={styles.home}>
        <FrameComponent />
        <main className={styles.main}>
          <section className={styles.content}>
            <div className={styles.contentChild} />
            <div className={styles.companyInfo}>
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameContainer}>
                    <div className={styles.maskGroupParent}>
                      <img
                        className={styles.maskGroupIcon}
                        loading="lazy"
                        alt=""
                        src="/mask-group@2x.png"
                      />
                      <img
                        className={styles.frameChild}
                        alt=""
                        src="/group-11635.svg"
                      />
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.frameDiv}>
                        <div
                          className={styles.graffersidWebAndAppDevelopParent}
                        >
                          <h3 className={styles.graffersidWebAnd}>
                            Graffersid Web and App Development
                          </h3>
                          <div className={styles.location}>
                            <div className={styles.akarIconslocationWrapper}>
                              <img
                                className={styles.akarIconslocation}
                                loading="lazy"
                                alt=""
                                src="/akariconslocation-1.svg"
                              />
                            </div>
                            <div
                              className={styles.shekharCentralManorama}
                            >{`816, Shekhar Central, Manorama Ganj, AB road, New Palasia, Indore (M.P.) `}</div>
                          </div>
                        </div>
                        <div className={styles.rating}>
                          <div className={styles.stars}>
                            <div className={styles.empty}>4.5</div>
                            <div className={styles.starIcons}>
                              <img
                                className={styles.faSolidstarIcon}
                                loading="lazy"
                                alt=""
                                src="/fasolidstar.svg"
                              />
                            </div>
                            <div className={styles.starIcons}>
                              <img
                                className={styles.faSolidstarIcon}
                                alt=""
                                src="/fasolidstar.svg"
                              />
                            </div>
                            <div className={styles.starIcons}>
                              <img
                                className={styles.faSolidstarIcon}
                                alt=""
                                src="/fasolidstar.svg"
                              />
                            </div>
                            <div className={styles.starIcons}>
                              <img
                                className={styles.faSolidstarIcon}
                                alt=""
                                src="/fasolidstar.svg"
                              />
                            </div>
                            <div className={styles.starIcons}>
                              <img
                                className={styles.faSolidstarIcon}
                                alt=""
                                src="/fasolidstar-4.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.reviewCount}>
                            <div className={styles.reviews}>41 Reviews</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.founded}>
                    <div className={styles.frameParent1}>
                      <div className={styles.foundedOn01012016Wrapper}>
                        <div className={styles.foundedOn01012016}>
                          Founded on 01-01-2016
                        </div>
                      </div>
                      <div
                        className={styles.addReviewWrapper}
                        onClick={openFrame}
                      >
                        <div className={styles.addReview}>+ Add Review</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.reviewList}>
                  <div className={styles.result}>
                    <div className={styles.resultChild} />
                    <div className={styles.resultFound5Wrapper}>
                      <div className={styles.resultFound5}>Result Found: 5</div>
                    </div>
                  </div>
                  <div className={styles.reviewsContainer}>
                    <div className={styles.review}>
                      <div className={styles.user}>
                        {[1,2,3].map(element => (<img
                          className={styles.userImageIcon}
                          loading="lazy"
                          alt=""
                          src="/ellipse-5@2x.png"
                        />))}
                      </div>
                      <div className={styles.reviewContent}>
                        {[1,2,3].map(element => <ReviewPage/>)}
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Webpage onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default Home1;
