import styles from './Breadcrumb.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.breadcrumb, className].join(' ')}>
      <div className={styles.breadcrumbItem}>
        <div className={styles.breadcrumbLink}>Homepage</div>
      </div>
      <div className={styles.breadcrumbSeparator}>
        <div className={styles.content}>
          <div className={styles.breadcrumbLink}>/</div>
        </div>
      </div>
      <div className={styles.breadcrumbItem}>
        <div className={styles.breadcrumbLink}>差旅</div>
      </div>
      <div className={styles.breadcrumbSeparator}>
        <div className={styles.content}>
          <div className={styles.breadcrumbLink}>/</div>
        </div>
      </div>
      <div className={styles.breadcrumbItem2}>
        <div className={styles.breadcrumbLink}>出差申請</div>
      </div>
    </div>);
};

export default ;
