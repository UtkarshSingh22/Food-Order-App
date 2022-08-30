import React from "react";
import styles from "./StoreInfo.module.css";
import img1 from "../../images/food1.jpg";
import img2 from "../../images/food2.jpg";
import img3 from "../../images/food3.jpg";
import img4 from "../../images/food4.jpg";
import img5 from "../../images/food6.jpg";

const StoreInfo = () => {
    return (
        <div className={styles.main}>
            <img src={img1} alt="food img" className={styles.pic1} />
            <img src={img2} alt="food img" className={styles.pic2} />
            <img src={img3} alt="food img" className={styles.pic3} />
            <img src={img4} alt="food img" className={styles.pic4} />
            <img src={img5} alt="food img" className={styles.pic5} />
        </div>
    );
};

export default StoreInfo;
