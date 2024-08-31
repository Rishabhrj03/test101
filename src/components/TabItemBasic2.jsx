import styles from './TabItemBasic2.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.tabItemBasic, className].join(' ')}>
      <b className={styles.tabTitle}>全部(12)</b>
    </div>);
};

export default ;
