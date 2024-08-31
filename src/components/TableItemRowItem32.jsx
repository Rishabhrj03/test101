import styles from './TableItemRowItem32.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.tableItemRowItem, className].join(' ')}>
      <div className={styles.textWrapper}>
        <div className={styles.tableCellText}>加拿大</div>
      </div>
    </div>);
};

export default ;
