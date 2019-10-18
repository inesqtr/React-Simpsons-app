import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";
import Lamp from "./Lamp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { working: true };
    this.handleClickButton = this.handleClickButton.bind(this);
  };

  // handleClickButton() {
    // this.setState({ working: !this.state.working })
  // };

  handleClickButton() {
    this.setState((state) => {
      return {working: !state.working};
    })
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.working ? "App-logo" : "App-logo-transform"} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <button
            onClick={this.handleClickButton}>Working
          </ button>
        </header>

        <Lamp on />
        <Lamp />
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />

      </ div>
    );
  }
}


export default App;