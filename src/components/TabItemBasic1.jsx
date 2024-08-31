import styles from './TabItemBasic1.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.tabItemBasic, className].join(' ')}>
      <div className={styles.tabTitle}>待審核(6)</div>
    </div>);
};

export default ;
