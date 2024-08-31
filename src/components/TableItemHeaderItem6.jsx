import styles from './TableItemHeaderItem6.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.tableItemHeaderItem, className].join(' ')}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <b className={styles.tableHeader}>城市</b>
          <img className={styles.sortIcon} alt="" src="/sort.svg" />
        </div>
      </div>
    </div>);
};

export default ;
