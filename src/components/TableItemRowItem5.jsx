import styles from './TableItemRowItem5.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.tableItemRowItem, className].join(' ')}>
      <div className={styles.textWrapper}>
        <div className={styles.tableCellText}>2024/5/25</div>
      </div>
    </div>);
};

export default ;
