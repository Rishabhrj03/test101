import 'antd/dist/antd.min.css';
import { Button } from "antd"
import styles from './Button1.module.css';


const  = ({ className="" }) => {
  return (
    <Button className={[styles.button, className].join(' ')} style={{ width: "80px" }} type="primary">Button</Button>);
};

export default ;
