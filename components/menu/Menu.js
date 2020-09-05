import React, { Component } from "react";
import styles from "./Menu.module.scss";

export default class Menu extends Component {
  render() {
    return (
        <div className="container">
          <ul>
            <li><h1 className={styles.menu}>YardSold</h1></li>
            <li><button className={styles.menu}>Sign Up</button></li>
            <li><button className={styles.menu}>Login</button></li>
          </ul>
        </div>        
    );
  }

}
