import 'antd/dist/antd.min.css';
import { AutoComplete } from "antd"
import styles from './AutoComplete.module.css';


const  = ({ className="" }) => {
  return (
    <AutoComplete className={[styles.autocomplete, className].join(' ')} placeholder="Input" />);
};

export default ;
