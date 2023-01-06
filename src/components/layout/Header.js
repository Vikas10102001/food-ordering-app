import meals from "../../assets/meals.jpg";
import classes from "./header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onOpen={props.onOpen} />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt={"Food Table"} />
      </div>
    </>
  );
};
export default Header;
