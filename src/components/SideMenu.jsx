import styles from './SideMenu.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.sideMenu, className].join(' ')}>
      <div className={styles.menuItems}>
        <div className={styles.sideMenuItemMenuItem}>
          <img className={styles.iconDefaulticonfilled} alt="" src="/icon--defaulticonfilled.svg" />
          <div className={styles.menuItem}>Menu Item</div>
        </div>
        <div className={styles.sideMenuItemMenuItem1}>
          <img className={styles.iconDefaulticonfilled} alt="" src="/icon--defaulticonfilled1.svg" />
          <div className={styles.menuItem}>Menu Item</div>
        </div>
        <div className={styles.sideSubmenu1stLayer}>
          <div className={styles.sideMenuItemSubmenuTitle}>
            <img className={styles.iconDefaulticonfilled} alt="" src="/icon--defaulticonfilled2.svg" />
            <div className={styles.menuItem}>Submenu Title</div>
            <img className={styles.iconUpoutlined} alt="" src="/icon--upoutlined.svg" />
          </div>
          <div className={styles.list}>
            <div className={styles.sideMenuItemMenuItem2}>
              <div className={styles.menuItem}>Menu Item</div>
            </div>
            <div className={styles.sideSubmenu1stLayer}>
              <div className={styles.sideMenuItemSubmenuTitle1}>
                <div className={styles.menuItem}>Submenu Title</div>
                <img className={styles.iconUpoutlined} alt="" src="/icon--upoutlined.svg" />
              </div>
              <div className={styles.list}>
                <div className={styles.sideMenuItemMenuItem3}>
                  <div className={styles.menuItem}>Menu Item</div>
                </div>
                <div className={styles.sideMenuItemMenuItem3}>
                  <div className={styles.menuItem}>Menu Item</div>
                </div>
                <div className={styles.sideMenuItemMenuItem3}>
                  <div className={styles.menuItem}>Menu Item</div>
                </div>
              </div>
            </div>
            <div className={styles.sideMenuItemMenuItem2}>
              <div className={styles.menuItem}>Menu Item</div>
            </div>
          </div>
        </div>
        <div className={styles.sideMenuItemMenuItem1}>
          <img className={styles.iconDefaulticonfilled} alt="" src="/icon--defaulticonfilled1.svg" />
          <div className={styles.menuItem}>Menu Item</div>
        </div>
        <div className={styles.sideMenuItemMenuItem1}>
          <img className={styles.iconDefaulticonfilled} alt="" src="/icon--defaulticonfilled1.svg" />
          <div className={styles.menuItem}>Menu Item</div>
        </div>
        <div className={styles.sideMenuItemMenuItem1}>
          <img className={styles.iconDefaulticonfilled} alt="" src="/icon--defaulticonfilled1.svg" />
          <div className={styles.menuItem}>Menu Item</div>
        </div>
        <div className={styles.sideMenuItemMenuItem1}>
          <img className={styles.iconDefaulticonfilled} alt="" src="/icon--defaulticonfilled1.svg" />
          <div className={styles.menuItem}>Menu Item</div>
        </div>
        <div className={styles.sideMenuItemMenuItem1}>
          <img className={styles.iconDefaulticonfilled} alt="" src="/icon--defaulticonfilled1.svg" />
          <div className={styles.menuItem}>Menu Item</div>
        </div>
        <div className={styles.sideMenuItemMenuItem1}>
          <img className={styles.iconDefaulticonfilled} alt="" src="/icon--defaulticonfilled1.svg" />
          <div className={styles.menuItem}>Menu Item</div>
        </div>
        <div className={styles.sideMenuItemMenuItem1}>
          <img className={styles.iconDefaulticonfilled} alt="" src="/icon--defaulticonfilled1.svg" />
          <div className={styles.menuItem}>Menu Item</div>
        </div>
        <div className={styles.sideMenuItemMenuItem1}>
          <img className={styles.iconDefaulticonfilled} alt="" src="/icon--defaulticonfilled1.svg" />
          <div className={styles.menuItem}>Menu Item</div>
        </div>
        <div className={styles.sideMenuItemMenuItem1}>
          <img className={styles.iconDefaulticonfilled} alt="" src="/icon--defaulticonfilled1.svg" />
          <div className={styles.menuItem}>Menu Item</div>
        </div>
      </div>
      <div className={styles.scrollBar}>
        <div className={styles.scrollBar1} />
      </div>
    </div>);
};

export default ;
