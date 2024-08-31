import styles from './TableItemRowItem4.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.tableItemRowItem, className].join(' ')}>
      <div className={styles.textWrapper}>
        <div className={styles.tableCellText}>舊金山</div>
      </div>
    </div>);
};

export default ;
