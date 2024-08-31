import styles from './TabItemBasic3.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.tabItemBasic, className].join(' ')}>
      <div className={styles.tabTitle}>已退回(0)</div>
    </div>);
};

export default ;
