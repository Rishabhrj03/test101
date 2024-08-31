import React from 'react'
import styles from "../pages/Home1.module.css";

function ReviewPage() {
  return (
  <div className={styles.reviewDetailsParent}>
    <div className={styles.reviewDetails}>
      <div className={styles.reviewer}>
        <h3 className={styles.jorgueWatson}>
          Jorgue Watson
        </h3>
        <div className={styles.reviewerSeparator}>
          <div className={styles.separator}>
            01-01-2022,
          </div>
          <div className={styles.separator1}>14:33</div>
        </div>
      </div>
      <div className={styles.reviewStars}>
        <div className={styles.reviewStarIcons}>
          <img
            className={styles.faSolidstarIcon5}
            alt=""
            src="/fasolidstar.svg"
          />
          <img
            className={styles.faSolidstarIcon5}
            alt=""
            src="/fasolidstar.svg"
          />
          <img
            className={styles.faSolidstarIcon5}
            alt=""
            src="/fasolidstar.svg"
          />
          <img
            className={styles.faSolidstarIcon5}
            alt=""
            src="/fasolidstar.svg"
          />
        </div>
      </div>
    </div>
    <div className={styles.graffersidOneOf}>
      Graffersid one of the best Company dolor sit amet,
      consectetur adipiscing elit. Congue netus feugiat
      elit suspendisse commodo. Pellentesque risus
      suspendisse mattis et massa. Ultrices ac at nibh et.
      Aliquam aliquam ultricies ac pulvinar eleifend duis.
      Eget congue fringilla quam ut mattis tortor posuere
      semper ac. Sem egestas vestibulum faucibus montes.
      Gravida sit non arcu consequat.
    </div>
  </div>
  
  )
}

export default ReviewPage