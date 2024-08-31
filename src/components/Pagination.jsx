import styles from './Pagination.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.pagination, className].join(' ')}>
      <div className={styles.paginationItemArrow}>
        <img className={styles.iconLeftoutlined} alt="" src="/icon--leftoutlined.svg" />
      </div>
      <div className={styles.paginationItemNumber}>
        <b className={styles.b}>1</b>
      </div>
      <div className={styles.paginationItemArrow}>
        <div className={styles.b}>2</div>
      </div>
      <div className={styles.paginationItemArrow}>
        <div className={styles.b}>3</div>
      </div>
      <div className={styles.paginationItemArrow}>
        <div className={styles.b}>4</div>
      </div>
      <div className={styles.paginationItemArrow}>
        <div className={styles.b}>5</div>
      </div>
      <div className={styles.paginationItemArrow}>
        <img className={styles.iconLeftoutlined} alt="" src="/icon--rightoutlined.svg" />
      </div>
    </div>);
};

export default ;
