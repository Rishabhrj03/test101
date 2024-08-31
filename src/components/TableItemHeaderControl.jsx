import 'antd/dist/antd.min.css';
import { Checkbox } from "antd"
import styles from './TableItemHeaderControl.module.css';


const  = ({ className="" }) => {
  return (
    <div className={[styles.tableItemHeaderControl, className].join(' ')}>
      <Checkbox className={styles.checkbox}>Checkbox</Checkbox>
    </div>);
};

export default ;
