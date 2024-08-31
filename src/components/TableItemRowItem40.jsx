import styles from './TableItemRowItem40.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.tableItemRowItem, className].join(' ')}>
      <div className={styles.textWrapper}>
        <div className={styles.tableCellText}>Alice HL Wei</div>
      </div>
    </div>);
};

export default ;
