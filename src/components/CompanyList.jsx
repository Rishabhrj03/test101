import React, { useCallback } from 'react'
import styles from "../pages/Home.module.css";
import FrameComponent1 from './FrameComponent1';
import { useNavigate } from 'react-router-dom';


function CompanyList() {
    const navigate = useNavigate();

    const onGroupContainerClick = useCallback(() => {
      navigate("/home");
    }, [navigate]);
  
  return (
<div className={styles.companyCardParent}>
                  <div className={styles.companyCard}>
                    <div className={styles.cardContent}>
                      <img
                        className={styles.maskGroupIcon}
                        loading="lazy"
                        alt=""
                        src="/mask-group@2x.png"
                      />
                      <img
                        className={styles.cardContentChild}
                        alt=""
                        src="/group-11635.svg"
                      />
                    </div>
                    <div className={styles.companyCardInner}>
                      <div className={styles.companyNameLocationParent}>
                        <div className={styles.companyNameLocation}>
                          <div className={styles.graffersidWebAnd}>
                            Graffersid Web and App Development
                          </div>
                          <div className={styles.frameContainer}>
                            <div className={styles.akarIconslocationWrapper}>
                              <img
                                className={styles.akarIconslocation}
                                alt=""
                                src="/akariconslocation-1.svg"
                              />
                            </div>
                            <div
                              className={styles.shekharCentralManorama}
                            >{`816, Shekhar Central, Manorama Ganj, AB road, New Palasia, Indore (M.P.) `}</div>
                          </div>
                        </div>
                        <div className={styles.ratingReviewsParent}>
                          <div className={styles.ratingReviews}>
                            <div className={styles.ratingCount}>4.5</div>
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
                          <div className={styles.reviews}>41 Reviews</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <FrameComponent1
                    foundedOn01012016="Founded on 01-01-2016"
                    onGroupContainerClick={onGroupContainerClick}
                  />
                </div>
  )
}

export default CompanyList