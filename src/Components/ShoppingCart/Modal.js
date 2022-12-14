import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onCloseCart}></div>;
};

const Overlay = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
};

const element = document.getElementById("overlays");

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onCloseCart={props.onCloseCart} />,
                element
            )}
            {ReactDOM.createPortal(
                <Overlay>{props.children}</Overlay>,
                element
            )}
        </Fragment>
    );
};

export default Modal;
