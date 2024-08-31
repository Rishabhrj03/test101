import styles from './TableItemRowItem20.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.tableItemRowItem, className].join(' ')}>
      <div className={styles.link}>
        <div className={styles.content}>
          <div className={styles.link1}>編輯</div>
        </div>
      </div>
    </div>);
};

export default ;
