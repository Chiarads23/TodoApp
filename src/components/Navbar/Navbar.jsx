import styles from "../../styles/layout/Navbar.module.scss";
import React from "react";
import logo from "../../assets/preview.jpg";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      <h2>Todo List</h2>
    </header>
  );
};

export default Navbar;
