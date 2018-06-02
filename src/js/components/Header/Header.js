import React, { Component } from "react";
import styles from './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <a className={styles.title}> Elijah Dutsev </a>
        <div className={styles['navigation-buttons']}>
          {["Home", "Qualifications", "Experiences", "Contacts"].map(link => (
            <div key={link} className={styles['nav-button']}>
              <a href="#header"> {link} </a>
            </div>
          ))}
        </div>
        <div className={styles['menu-button']}>
          <i className={styles['menu-icon']} />
        </div>
      </div>
    );
  }
}