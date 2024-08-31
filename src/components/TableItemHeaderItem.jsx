import styles from './TableItemHeaderItem.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.tableItemHeaderItem, className].join(' ')}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <b className={styles.tableHeader}>動作</b>
        </div>
      </div>
    </div>);
};

export default ;
