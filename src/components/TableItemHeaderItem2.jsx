import styles from './TableItemHeaderItem2.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.tableItemHeaderItem, className].join(' ')}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <b className={styles.tableHeader}>審核狀態</b>
        </div>
      </div>
    </div>);
};

export default ;
