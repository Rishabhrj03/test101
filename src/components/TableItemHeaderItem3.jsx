import styles from './TableItemHeaderItem3.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.tableItemHeaderItem, className].join(' ')}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <b className={styles.tableHeader}>原因</b>
        </div>
      </div>
    </div>);
};

export default ;
