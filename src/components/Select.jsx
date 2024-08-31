import 'antd/dist/antd.min.css';
import { Select } from "antd"
import styles from './Select.module.css';


const  = ({ className="" }) => {
  return (
    <Select className={[styles.select, className].join(' ')} placeholder="Select" filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            } virtual={false} showArrow={false}>{` `}</Select>);
};

export default ;
