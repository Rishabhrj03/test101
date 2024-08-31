import 'antd/dist/antd.min.css';
import { Checkbox } from "antd"
import styles from './TableItemRowControl4.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.tableItemRowControl, className].join(' ')}>
      <Checkbox className={styles.checkbox}>Checkbox</Checkbox>
    </div>);
};

export default ;
