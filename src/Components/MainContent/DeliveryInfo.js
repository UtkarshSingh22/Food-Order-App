import React from "react";
import gif from "../../images/delivery.gif";
import styles from "./DeliveryInfo.module.css";

const DeliveryInfo = () => {
    return (
        <div className={styles.main}>
            <img src={gif} alt="gif" className={styles.gif} />
            <div className={styles.head}>
                <div className={styles.info1}>Order fast and get your</div>
                <div className={styles.info2}>
                    order delivered within 30 minutes!
                </div>
            </div>
        </div>
    );
};

export default DeliveryInfo;
