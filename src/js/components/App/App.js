import React, { Component } from "react";
import { render } from "react-dom";
import styles from './App.scss'
import Header from "../Header/Header";
import GreetingsBlock from "../GreetingsBlock/GreetingsBlock";

export default class App extends Component {
  render() {
    return (
        <div className={styles.main}>
            <Header />
            <GreetingsBlock />
        </div>
    );
  }
}