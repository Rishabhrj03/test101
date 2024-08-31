import styles from './Menu2.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.menu, className].join(' ')}>
      <div className={styles.menuHeader}>
        <div className={styles.heading}>FLOOR</div>
      </div>
      <div className={styles.menuSeparator}>
        <div className={styles.rule} />
      </div>
      <div className={styles.menuSection}>
        <div className={styles.menuItem}>
          <img className={styles.starIcon} loading="lazy" alt="" src="/star.svg" />
          <div className={styles.body}>
            <div className={styles.row}>
              <div className={styles.label}>Menu Label</div>
              <div className={styles.menuShortcut}>
                <div className={styles.a}>⇧A</div>
              </div>
            </div>
            <div className={styles.description}>Menu description.</div>
          </div>
        </div>
        <div className={styles.menuItem}>
          <img className={styles.starIcon} loading="lazy" alt="" src="/star.svg" />
          <div className={styles.body}>
            <div className={styles.row}>
              <div className={styles.label}>Menu Label</div>
              <div className={styles.menuShortcut}>
                <div className={styles.a}>⇧A</div>
              </div>
            </div>
            <div className={styles.description}>Menu description.</div>
          </div>
        </div>
        <div className={styles.menuItem}>
          <img className={styles.starIcon} loading="lazy" alt="" src="/star.svg" />
          <div className={styles.body}>
            <div className={styles.row}>
              <div className={styles.label}>Menu Label</div>
              <div className={styles.menuShortcut}>
                <div className={styles.a}>⇧A</div>
              </div>
            </div>
            <div className={styles.description}>Menu description.</div>
          </div>
        </div>
      </div>
      <div className={styles.menuSeparator1}>
        <div className={styles.rule} />
      </div>
      <section className={styles.menuSection1}>
        <div className={styles.menuItem}>
          <img className={styles.starIcon} loading="lazy" alt="" src="/star.svg" />
          <div className={styles.body}>
            <div className={styles.row}>
              <div className={styles.label}>Menu Label</div>
              <div className={styles.menuShortcut}>
                <div className={styles.a}>⇧A</div>
              </div>
            </div>
            <div className={styles.description}>Menu description.</div>
          </div>
        </div>
        <div className={styles.menuItem}>
          <img className={styles.starIcon} loading="lazy" alt="" src="/star.svg" />
          <div className={styles.body}>
            <div className={styles.row}>
              <div className={styles.label}>Menu Label</div>
              <div className={styles.menuShortcut}>
                <div className={styles.a}>⇧A</div>
              </div>
            </div>
            <div className={styles.description}>Menu description.</div>
          </div>
        </div>
      </section>
    </div>);
};

export default ;
