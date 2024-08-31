import 'antd/dist/antd.min.css';
import { Button } from "antd"
import styles from './Button.module.css';


const  = ({ className="" }) => {
  return (
    <Button className={[styles.button, className].join(' ')} type="primary">Button</Button>);
};

export default ;
