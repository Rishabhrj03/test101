import 'antd/dist/antd.min.css';
import { DatePicker } from "antd"
import styles from './DatePicker.module.css';


const  = ({ className="" }) => {
  return (
    <DatePicker className={[styles.datepicker, className].join(' ')} placeholder="Select date" allowClear={false} bordered={false} />);
};

export default ;
