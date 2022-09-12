import React, { Fragment } from "react";
import styles from "./Header.module.css";
import marketImage from "../../assets/market.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Thai Market</h1>
        <HeaderCartButton onOpenCart={props.onOpenCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={marketImage} alt="colorful produce" />
      </div>
    </Fragment>
  );
};

export default Header;
