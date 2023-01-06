import classes from "./Modal.module.css"
import ReactDOM from "react-dom";
const ModalBackdrop = () => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return <div className={ `${props.addClass} ${classes.overlay}`}>{props.children}</div>;
};
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalBackdrop />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay addClass={props.className}>{props.children}</ModalOverlay>,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default Modal