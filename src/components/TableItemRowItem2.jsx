import styles from './TableItemRowItem2.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.tableItemRowItem, className].join(' ')}>
      <div className={styles.textWrapper}>
        <div className={styles.tableCellText}>專案訪談</div>
      </div>
    </div>);
};

export default ;
