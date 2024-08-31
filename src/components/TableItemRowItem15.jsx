import styles from './TableItemRowItem15.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.tableItemRowItem, className].join(' ')}>
      <div className={styles.tagColorful}>
        <div className={styles.green}>已通過</div>
      </div>
    </div>);
};

export default ;
