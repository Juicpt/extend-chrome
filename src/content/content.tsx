import styles from './content.module.less';
import {Button} from "antd";


function Content() {
    return (
        <div className={styles['test']}>
            <Button type="primary">Hello World</Button>
        </div>
    );
}

export default Content;
