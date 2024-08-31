import styles from './TableItemRowItem3.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.tableItemRowItem, className].join(' ')}>
      <div className={styles.textWrapper}>
        <div className={styles.tableCellText}>美國</div>
      </div>
    </div>);
};

export default ;
