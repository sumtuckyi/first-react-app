import { Link } from "react-router-dom";
import styles from "./nav_bar.module.css";

function nav () {
    return (
        <div>
            <nav>
                <ul className={styles.bar}>
                    <Link to={`${process.env.PUBLIC_URL}/`}><li className={styles.option}>Home</li></Link>
                    <Link to={`/tv_series`}><li className={styles.option}>TV Shows</li></Link>
                    <Link to={`/recent`}><li className={styles.option}>Recent</li></Link>
                </ul>
            </nav>
        </div>
    );
};

export default nav;