import React from "react";
import styles from "./MainContent.module.css";
import gif1 from "../../images/foodCarousel.gif";
import gif2 from "../../images/food2.gif";

const MainContent = () => {
    return (
        <div className={styles.content}>
            <div className={styles.info}>
                <div className={styles.head}>Delicious Food</div>
                <div className={styles.head}>Delivered To You</div>
                <div className={styles.intro1}>
                    Choose your favorite meals from our broad selection of
                    available meals and enjoy a delicious lunch or dinner at
                    home.
                </div>
                <div className={styles.intro2}>
                    All our meals are cooked with high quality ingredients,
                    just-in-time and of course by experienced chefs.
                </div>
            </div>
            <div className={styles.gifs}>
                <img src={gif1} alt="food carousel" className={styles.img} />
                <img src={gif2} alt="food carousel" className={styles.img} />
            </div>
        </div>
    );
};
export default MainContent;
