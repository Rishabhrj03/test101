import styles from './TabItemBasic.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.tabItemBasic, className].join(' ')}>
      <div className={styles.tabTitle}>已通過(4)</div>
    </div>);
};

export default ;
