import styles from './HeaderMenu.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.headerMenu, className].join(' ')}>
      <div className={styles.header}>
        <div className={styles.menuAndLogoAndSystemName}>
          <div className={styles.clickArea}>
            <img className={styles.iconMenuoutlined} alt="" src="/icon--menuoutlined.svg" />
          </div>
          <div className={styles.logoAndSystemName}>
            <div className={styles.logo}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
            <div className={styles.divider} />
            <b className={styles.b}>出差申請系統</b>
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.actions1}>
            <div className={styles.clickArea}>
              <img className={styles.iconMenuoutlined} alt="" src="/icon--belloutlined.svg" />
            </div>
            <div className={styles.clickArea}>
              <img className={styles.iconMenuoutlined} alt="" src="/icon--globaloutlined.svg" />
            </div>
          </div>
          <div className={styles.divider1} />
          <div className={styles.avatar}>
            <div className={styles.a}>U</div>
          </div>
          <div className={styles.dropdown}>
            <div className={styles.dropdownBasicInline}>
              <div className={styles.dropdown1}>User Name</div>
              <img className={styles.iconDownoutlined} alt="" src="/icon--downoutlined.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerDecoLine} />
    </div>);
};

export default ;
