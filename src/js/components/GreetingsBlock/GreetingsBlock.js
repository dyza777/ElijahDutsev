import React, { Component } from "react";
import styles from './GreetingsBlock.scss';

export default class GreetingsBlock extends Component {
  render() {
    return (
      <div className={styles['greetings-block']}>
        <div className={styles['greetings-avatar']}>
          <img
            alt="Avatar"
            src="https://uploads.codesandbox.io/uploads/user/db578990-24bb-4c4d-bef5-e61223b6edc0/cgVT-YU0oKq8Nwkk.jpg"
          />
        </div>
        <div className={styles['greetings-text-block']}>
          <span className={styles["greetings-title"]}>Hello there!</span>
          <span className={styles["greetings-text"]}>
            My name is Elijah, glad to meet you. Nice to see you here. You may
            have found yourself here accidentally, or, maybe, you willingly wish
            to know, who the hell this guy is. Anyway, feel free to investigate
            the page and probably you will find something interesting.
          </span>
        </div>
      </div>
    );
  }
}
