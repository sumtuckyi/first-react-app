import styles from "./nav_bar.module.css";

function nav () {
    return (
        <div>
            <nav>
                <ul className={styles.bar}>
                    <li className={styles.option}>option #1</li>
                    <li className={styles.option}>option #2</li>
                    <li className={styles.option}>option #3</li>
                </ul>
            </nav>
        </div>
    );
};

export default nav;