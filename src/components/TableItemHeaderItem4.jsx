import styles from './TableItemHeaderItem4.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.tableItemHeaderItem, className].join(' ')}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <b className={styles.tableHeader}>國家</b>
          <img className={styles.sortIcon} alt="" src="/sort.svg" />
        </div>
      </div>
    </div>);
};

export default ;
